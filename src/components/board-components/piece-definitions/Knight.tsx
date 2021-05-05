import React, { ReactElement } from 'react'
import BlackPiece from './piece-svgs/BN.svg'
import WhitePiece from './piece-svgs/WN.svg'

interface Props {
    value: string;
}

function Knight({ value }: Props): ReactElement {
    return (
        <img src={value === value.toUpperCase() ? WhitePiece : BlackPiece} alt="Knight"/>
    )
}

export default Knight