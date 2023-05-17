import Lottie from "lottie-react";

interface ThreeDotsAnimationProps {
  className?: string;
}

const ThreeDotsAnimation: React.FC<ThreeDotsAnimationProps> = ({
  className = "",
}) => (
  <div className={className}>
    <Lottie animationData={threeDotsAnimation} loop={true} />
  </div>
);

const threeDotsAnimation = {
  v: "4.10.2",
  fr: 30,
  ip: 0,
  op: 39,
  w: 42,
  h: 17,
  nm: "loading",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Left",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 0,
              s: [30],
              e: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 15,
              s: [100],
              e: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 17.5,
              s: [100],
              e: [30],
            },
            { t: 30.0000012219251 },
          ],
          ix: 11,
        },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [23.188, 8.5, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [7, 7], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: "Caminho da elipse 1",
              mn: "ADBE Vector Shape - Ellipse",
              hd: false,
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [
                  0.2901960784313726, 0.5647058823529412, 0.8862745098039215, 1,
                ],
                ix: 3,
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 0, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              nm: "Traçado 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [
                  0.2627450980392157, 0.5882352941176471, 0.9686274509803922, 1,
                ],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: "Preenchimento 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [-13.11, 0.14], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transformar",
            },
          ],
          nm: "Elipse 1",
          np: 3,
          cix: 2,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 40.0000016292334,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Mid",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 10,
              s: [30],
              e: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 20,
              s: [100],
              e: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 22.5,
              s: [100],
              e: [30],
            },
            { t: 35.0000014255792 },
          ],
          ix: 11,
        },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [34.188, 8.5, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [7, 7], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: "Caminho da elipse 1",
              mn: "ADBE Vector Shape - Ellipse",
              hd: false,
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [
                  0.2901960784313726, 0.5647058823529412, 0.8862745098039215, 1,
                ],
                ix: 3,
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 0, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              nm: "Traçado 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [
                  0.2627450980392157, 0.5882352941176471, 0.9686274509803922, 1,
                ],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: "Preenchimento 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [-13.11, 0.14], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transformar",
            },
          ],
          nm: "Elipse 1",
          np: 3,
          cix: 2,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 40.0000016292334,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Right",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 15,
              s: [30],
              e: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 25,
              s: [100],
              e: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 27.5,
              s: [100],
              e: [30],
            },
            { t: 40.0000016292334 },
          ],
          ix: 11,
        },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [44.812, 8.5, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [7, 7], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: "Caminho da elipse 1",
              mn: "ADBE Vector Shape - Ellipse",
              hd: false,
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [
                  0.2901960784313726, 0.5647058823529412, 0.8862745098039215, 1,
                ],
                ix: 3,
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 0, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              nm: "Traçado 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [
                  0.2627450980392157, 0.5882352941176471, 0.9686274509803922, 1,
                ],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: "Preenchimento 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [-13.11, 0.14], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transformar",
            },
          ],
          nm: "Elipse 1",
          np: 3,
          cix: 2,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 40.0000016292334,
      st: 0,
      bm: 0,
    },
  ],
};

export default ThreeDotsAnimation;