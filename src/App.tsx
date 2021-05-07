import React, { Component,  useState, useEffect } from 'react'
import { useTheme } from '@itwin/itwinui-react'
import ndjsonStream from "can-ndjson-stream"

import './App.css'
import Header from './components/general-components/Header'
import Board from './components/board-components/Board'
import GameInfo from './components/general-components/GameInfo'


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

function App() {
  useTheme('dark')

  const [fenString, setFenString] = useState(
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
  );
  const [lastMove, setLastMove] = useState([[], []]);
  
  const [whitePlayer, setWhitePlayer] = useState("");
  const [whiteCaptured, setWhiteCaptured] = useState("");
  const [blackPlayer, setBlackPlayer] = useState("");
  const [blackCaptured, setBlackCaptured] = useState("");

  const [doneStatus, setDoneStatus] = useState(false);

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

        if (res.value.t === "fen") {
          setLastMove(lastMoveToCoords(res.value.d.lm));
        }
        setFenString(res.value.d.fen);
        reader.read().then(read);
      }

      reader.read().then(read);
    }

    getFen();
  }, [doneStatus]);
  let squareArray: Array<Array<string>> = parseFENString(fenString);


  return (
    <div className="App">
      <Header />
      <div className="app-grid">
        <Board blackPlayer={blackPlayer} whitePlayer={whitePlayer} squareArray={squareArray} lastMove={lastMove} />
        <GameInfo />
      </div>
    </div>
  );
}

export default App;
