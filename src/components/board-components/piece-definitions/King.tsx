import React, { ReactElement } from 'react'
import BlackPiece from './piece-svgs/BK.svg'
import WhitePiece from './piece-svgs/WK.svg'

interface Props {
    value: string;
}

function King({ value }: Props): ReactElement {
    return (
        <img src={value === value.toUpperCase() ? WhitePiece : BlackPiece} alt="King"/>
    )
}

export default King
