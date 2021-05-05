import React, { ReactElement } from 'react'
import BlackPiece from './piece-svgs/BR.svg'
import WhitePiece from './piece-svgs/WR.svg'

interface Props {
    value: string;
}

function Rook({ value }: Props): ReactElement {
    return (
        <img src={value === value.toUpperCase() ? WhitePiece : BlackPiece} alt="Rook"/>
    )
}

export default Rook