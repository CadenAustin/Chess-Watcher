import React, { ReactElement } from 'react'
import BlackPiece from './piece-svgs/BQ.svg'
import WhitePiece from './piece-svgs/WQ.svg'

interface Props {
    value: string;
}

function Queen({ value }: Props): ReactElement {
    return (
        <img src={value === value.toUpperCase() ? WhitePiece : BlackPiece} alt="Queen" className="queen piece-image"/>
    )
}

export default Queen