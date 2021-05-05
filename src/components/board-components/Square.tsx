import React, { ReactElement } from 'react'
import Piece from './Piece'
import './Square.css'

interface Props {
    color: boolean;
    pieceKey: string;
}

function Square({ color, pieceKey }: Props): ReactElement {
    return (
        <div className={"board-container-square " + (color ? "light" : "dark")}>
            <Piece pieceKey={pieceKey}/>
        </div>
    )
}

export default Square
