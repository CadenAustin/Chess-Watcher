import React, { ReactElement } from "react";
import { Headline } from "@itwin/itwinui-react";
import internal from "node:stream";

import "./Board.css";
import Square from "./Square";
import Rank from "./Rank";
import File from "./File";

interface Props {
    blackPlayer: string;
    whitePlayer: string;
    squareArray: Array<Array<string>>;
    lastMove: Array<Array<Number>>;
}

function Board({ blackPlayer, whitePlayer, squareArray, lastMove }: Props): ReactElement {
  return (
    <div className="board-container center">
      <Headline className="black-player-name">{blackPlayer}</Headline>
      <div className="board-container-inner">
        {squareArray.map((val, index) => {
          return val.map((pieceKey, internalIndex) => {
            let key = (index * 8 + internalIndex).toString()
            return (
              <Square
                key={key}
                testId={key}
                color={(index % 2 === 0) === (internalIndex % 2 === 0)}
                highlight={lastMove.some(
                  (v) => v[0] === internalIndex && v[1] === index
                )}
                pieceKey={pieceKey}
              />
            );
          });
        })}
      </div>
      <Headline className="white-player-name">{whitePlayer}</Headline>
    </div>
  );
}

export default Board;
