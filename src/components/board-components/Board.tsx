import React, { ReactElement, useState, useEffect } from 'react'
import Square from './Square'
import Rank from './Rank'
import File from './File'
import './Board.css'
import internal from 'node:stream'
import ndjsonStream from 'can-ndjson-stream'

interface Props {
    
}

function parseFENString(fen: string) : Array<Array<string>> {
    let squareArray: Array<Array<string>> = [...Array(8)].map(x => Array(0))
    
    let splitString : string = fen.split(" ")[0]
    let rows : Array<string> = splitString.split("/")
    
    for (let ranks = 0; ranks < 8; ranks++){
        for (let charIndex = 0; charIndex < rows[ranks].length; charIndex++){
            let character = rows[ranks][charIndex]
            if (!isNaN(character as any)){
                for (let toAddIndex = 0; toAddIndex < parseInt(character); toAddIndex++){
                    squareArray[ranks].push('O')
                }
                continue;
            } 
            squareArray[ranks].push(character)
        }
    }
    return squareArray;

}


function Board({}: Props): ReactElement {
    const [fenString, setFenString] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR")
    const [doneStatus, setDoneStatus] = useState(false)
    const [whitePlayer, setWhitePlayer] = useState("")
    const [blackPlayer, setBlackPlayer] = useState("")

    useEffect(() => {
        async function getFen() {
            console.log("Get Fen")
            const res = await fetch("https://lichess.org/api/tv/feed", {
                method: "get"
            })
            const stream = ndjsonStream(res.body)
            const reader = stream.getReader()
            setDoneStatus(true)

            async function read(res: any){
                if (res.value.t !== "fen"){
                    console.log("Read Players", res.value.d)
                    if (res.value.d.players[0].color === "white"){
                        setWhitePlayer(res.value.d.players[0].user.name)
                        setBlackPlayer(res.value.d.players[1].user.name)
                    } else {
                        setWhitePlayer(res.value.d.players[1].user.name)
                        setBlackPlayer(res.value.d.players[0].user.name)
                    }

                }
                if (res.done){
                    setDoneStatus(false)
                    return
                }
                
                
                setFenString(res.value.d.fen)
                reader.read().then(read)
            }

            reader.read().then(read)
        }

        getFen()
    }, [doneStatus])

    let squareArray: Array<Array<string>> = parseFENString(fenString)

    return (
        <div className="board-container center">
            <h1>{blackPlayer}</h1>
            <div className="board-container-inner">
                {squareArray.map((val, index) => val.map((pieceKey, internalIndex) => <Square key={((index * 8) + internalIndex).toString()} color={(index % 2 === 0) === (internalIndex % 2 === 0)} pieceKey={pieceKey} />))}
            </div>
            <h1>{whitePlayer}</h1>
        </div>
    )
}

export default Board
