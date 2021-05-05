import React, { ReactElement } from 'react'
import Piece from './Piece'
import './Square.css'

interface Props {
    color: boolean;
    highlight: boolean;
    pieceKey: string;
}

function Square({ color, highlight, pieceKey }: Props): ReactElement {
    return (
        <div className={"board-container-square " + (color ? "light" : "dark") + (highlight ? " highlight" : "")}>
            <Piece pieceKey={pieceKey}/>
        </div>
    )
}

export default Square
