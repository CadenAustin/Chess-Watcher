import React, { ReactElement } from 'react'
import BlackPiece from './piece-svgs/BP.svg'
import WhitePiece from './piece-svgs/WP.svg'

interface Props {
    value: string;
}

function Pawn({ value }: Props): ReactElement {
    return (
        <img src={value === value.toUpperCase() ? WhitePiece : BlackPiece} alt="Pawn" className="pawn piece-image"/>
    )
}

export default Pawn