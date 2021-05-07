import React, { ReactElement } from 'react'
import Piece from './Piece'
import './Square.css'

interface Props {
    color: boolean;
    highlight: boolean;
    pieceKey: string;
    testId: string;
}

function Square({ color, highlight, pieceKey, testId }: Props): ReactElement {
    return (
        <div className={"board-container-square " + (color ? "light" : "dark") + (highlight ? " highlight" : "")} data-testid={testId}>
            <Piece pieceKey={pieceKey}/>
        </div>
    )
}

export default Square
