import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ConversationWindow from "./components/ConversationWindow";
import LaunchButton from "./components/LaunchButton";
import { ConvoStackWrapperProps } from "./ConvoStackWrapper";
import useConvoStack from "./hooks/useConvoStack";
import {
  setGraphqlUrl,
  setStyling,
  setUserData,
  setWebsocketlUrl,
} from "./redux/slice";
import { CustomIcons } from "./types/CustomStyling";

export const CustomIconsContext = createContext<CustomIcons | undefined>(
  undefined
);

const App: React.FC<Omit<ConvoStackWrapperProps, "children">> = ({
  graphqlUrl,
  websocketUrl,
  userData,
  customStyling,
  icons,
}) => {
  const { isConversationWindowVisible, toggleWidget } = useConvoStack();
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setWebsocketlUrl(websocketUrl));
    dispatch(setGraphqlUrl(graphqlUrl));
    if (customStyling !== undefined) dispatch(setStyling(customStyling));
    if (userData !== undefined) dispatch(setUserData(userData));
  }, [websocketUrl, graphqlUrl, customStyling, userData]);

  useEffect(() => {
    if (isConversationWindowVisible) {
      setIsShowing(true);
    } else {
      setTimeout(() => {
        setIsShowing(false);
      }, 200);
    }
  }, [isConversationWindowVisible]);

  return (
    <CustomIconsContext.Provider value={icons}>
      <div className="z-50">
        {isShowing && (
          <div
            className={
              isConversationWindowVisible
                ? "animate-conversation-window-fade-enter"
                : "animate-conversation-window-fade-out"
            }
          >
            <ConversationWindow
              onClickClose={() => toggleWidget(!isConversationWindowVisible)}
            />
          </div>
        )}
        <div className="sm:hidden fixed">
          {!isShowing && (
            <div
              className={
                isConversationWindowVisible
                  ? "animate-conversation-window-fade-out"
                  : ""
              }
            >
              <LaunchButton
                onClickClose={() => toggleWidget(!isConversationWindowVisible)}
                isConversationWindowVisible={isConversationWindowVisible}
              />
            </div>
          )}
        </div>
        <div className="max-sm:hidden">
          <LaunchButton
            onClickClose={() => toggleWidget(!isConversationWindowVisible)}
            isConversationWindowVisible={isConversationWindowVisible}
          />
        </div>
      </div>
    </CustomIconsContext.Provider>
  );
};

export default App;