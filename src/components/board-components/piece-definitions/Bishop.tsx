import React, { ReactElement } from 'react'
import BlackPiece from './piece-svgs/BB.svg'
import WhitePiece from './piece-svgs/WB.svg'

interface Props {
    value: string;
}

function Bishop({ value }: Props): ReactElement {
    return (
        <img src={value === value.toUpperCase() ? WhitePiece : BlackPiece} alt="Bishop"/>
    )
}

export default Bishop