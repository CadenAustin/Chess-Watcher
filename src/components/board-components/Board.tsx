import React, { ReactElement, useState, useEffect } from "react";
import { Headline } from "@itwin/itwinui-react";
import internal from "node:stream";
import ndjsonStream from "can-ndjson-stream";

import "./Board.css";
import Square from "./Square";
import Rank from "./Rank";
import File from "./File";

function getIndexFromCharacter(char: string): Number {
  switch (char) {
    case "a":
      return 0;
    case "b":
      return 1;
    case "c":
      return 2;
    case "d":
      return 3;
    case "e":
      return 4;
    case "f":
      return 5;
    case "g":
      return 6;
    case "h":
      return 7;
  }

  return 8;
}

function parseFENString(fen: string): Array<Array<string>> {
  let squareArray: Array<Array<string>> = [...Array(8)].map((x) => Array(0));

  let splitString: string = fen.split(" ")[0];
  let rows: Array<string> = splitString.split("/");

  for (let ranks = 0; ranks < 8; ranks++) {
    for (let charIndex = 0; charIndex < rows[ranks].length; charIndex++) {
      let character = rows[ranks][charIndex];
      if (!isNaN(character as any)) {
        for (
          let toAddIndex = 0;
          toAddIndex < parseInt(character);
          toAddIndex++
        ) {
          squareArray[ranks].push("O");
        }
        continue;
      }
      squareArray[ranks].push(character);
    }
  }
  return squareArray;
}

function lastMoveToCoords(lastMove: string): any {
  let ret = Array();
  let split: RegExpMatchArray | null = lastMove.match(/.{2}/g);

  if (split) {
    split.forEach((val) => {
      ret.push([getIndexFromCharacter(val[0]), 8 - parseInt(val[1])]);
    });
  }
  return ret;
}

interface Props {}

function Board({}: Props): ReactElement {
  const [fenString, setFenString] = useState(
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
  );
  const [doneStatus, setDoneStatus] = useState(false);
  const [whitePlayer, setWhitePlayer] = useState("");
  const [blackPlayer, setBlackPlayer] = useState("");
  const [lastMove, setLastMove] = useState([[], []]);

  useEffect(() => {
    async function getFen() {
      console.log("Get Fen");
      const res = await fetch("https://lichess.org/api/tv/feed", {
        method: "get",
      });
      const stream = ndjsonStream(res.body);
      const reader = stream.getReader();
      setDoneStatus(true);

      async function read(res: any) {
        if (res.value.t !== "fen") {
          if (res.value.d.players[0].color === "white") {
            setWhitePlayer(res.value.d.players[0].user.name);
            setBlackPlayer(res.value.d.players[1].user.name);
          } else {
            setWhitePlayer(res.value.d.players[1].user.name);
            setBlackPlayer(res.value.d.players[0].user.name);
          }
        }
        if (res.done) {
          setDoneStatus(false);
          return;
        }

        console.log(res.value);
        setFenString(res.value.d.fen);
        if (res.value.t === "fen") {
          setLastMove(lastMoveToCoords(res.value.d.lm));
        }
        reader.read().then(read);
      }

      reader.read().then(read);
    }

    getFen();
  }, [doneStatus]);

  let squareArray: Array<Array<string>> = parseFENString(fenString);

  return (
    <div className="board-container center">
      <Headline>{blackPlayer}</Headline>
      <div className="board-container-inner">
        {squareArray.map((val, index) => {
          return val.map((pieceKey, internalIndex) => {
            return (
              <Square
                key={(index * 8 + internalIndex).toString()}
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
      <Headline>{whitePlayer}</Headline>
    </div>
  );
}

export default Board;
