import React, { ReactElement } from 'react'
import Piece from './Piece'
import './Square.css'
import { useColorContext } from '../context-components/ColorContext'

interface Props {
    color: boolean;
    highlight: boolean;
    pieceKey: string;
    testId: string;
}

const GetSquareStyle = (colors: string[], color: boolean, highlight: boolean) => {
    let colorIndex = 0;

    if (highlight){
        colorIndex = 2
    } else {
        if (color){
            colorIndex = 0
        } else {
            colorIndex = 1
        }
    }

    let style={
        backgroundColor: "#" + colors[colorIndex],
    }

    return(style)
}

function Square({ color, highlight, pieceKey, testId }: Props): ReactElement {
    const { colors } = useColorContext();
    return (
        <div style={GetSquareStyle(colors, color, highlight)} className="board-container-square" data-testid={testId}>
            <Piece pieceKey={pieceKey}/>
        </div>
    )
}

export default Square
