import React, { ReactElement } from "react";
import { Headline } from "@itwin/itwinui-react";

import "./Board.css";
import Square from "./Square";

interface Props {
    blackPlayer: string;
    whitePlayer: string;
    squareArray: Array<Array<string>>;
    lastMove: Array<Array<Number>>;
}

function Board({ blackPlayer, whitePlayer, squareArray, lastMove }: Props): ReactElement {
  return (
    <div className="board-container center">
      <Headline className="black-player-name"><a href={"/user/" + blackPlayer}>{blackPlayer}</a></Headline>
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
      <Headline className="white-player-name"><a href={"/user/" + whitePlayer}>{whitePlayer}</a></Headline>
    </div>
  );
}

export default Board;
