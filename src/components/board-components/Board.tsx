import React, { ReactElement } from 'react'
import Square from './Square'
import Rank from './Rank'
import File from './File'
import './Board.css'
import internal from 'node:stream'

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

    console.log(squareArray)
    return squareArray;

}


function Board({}: Props): ReactElement {
    let fenString: string = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    let squareArray: Array<Array<string>> = parseFENString(fenString)

    return (
        <div className="board-container center">
            <div className="board-container-inner">
                {squareArray.map((val, index) => val.map((pieceKey, internalIndex) => <Square key={((index * 8) + internalIndex).toString()} color={(index % 2 === 0) === (internalIndex % 2 === 0)} pieceKey={pieceKey} />))}
            </div>
        </div>
    )
}

export default Board
