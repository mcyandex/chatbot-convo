import { ConvoStackBackend } from "backend-express";
import express from "express";
import StorageEnginePrismaSqlite from "storage-engine-prisma-sqlite";
import cors, { CorsOptions } from "cors";
import { AuthJWT } from "auth-jwt";
import { createServer } from "http";
import * as dotenv from "dotenv";
import { DefaultAgentManager } from "agent";
import { AgentSSEClient } from "agent-sse";
import { serveEchoAgentDev } from "agent-sse-echo-server";

dotenv.config();

const port = process.env.PORT || "3000";
const host = process.env.HOST || "localhost";
const ssePort = process.env.SSE_PORT || "3005";
const sseHost = process.env.SSE_HOST || "localhost";
console.log("Configuring server...");

const corsOptions: CorsOptions = {
  origin: ["http://localhost:5173", "https://studio.apollographql.com"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
};

const main = async () => {
  const app = express();
  app.use(cors(corsOptions));
  const httpServer = createServer(app);
  const storage = new StorageEnginePrismaSqlite(process.env.DATABASE_URL);
  await storage.init();
  const backend = new ConvoStackBackend({
    basePath: "/",
    storage,
    auth: new AuthJWT(storage, {
      jwtSecret: process.env.JWT_SECRET,
      userDataVerificationSecret: process.env.USER_VERIFICATION_HASH_SECRET,
      allowAnonUsers: process.env.ALLOW_ANONYMOUS_USERS == "true",
      requireUserVerificationHash: !(
        process.env.REQUIRE_USER_VERIFICATION_HASH == "false"
      )
    }),
    agents: new DefaultAgentManager({
      "default": {
        agent: new AgentSSEClient(`http://${sseHost}:${ssePort}/api/chat`),
        metadata: {
          displayName: "Echo Agent",
          primer: "This is demo echo agent. Write me a message, and I will send it back to you!",
          humanRole: "Human",
          aiRole: "AI"
        }
      }
    }, "default")
  });

  await backend.init(app, httpServer);

  console.log(`Starting server on port ${port}...`);
  httpServer.listen(parseInt(port), host, () => {
    console.log(`Server is running on http://${host}:${port}/graphql`);
  });
};

try {
  serveEchoAgentDev(parseInt(ssePort), sseHost, "/api/chat");
  main();
} catch (err) {
  console.error(err);
}