import React, { ReactElement } from 'react'
import './Piece.css'

import Bishop from './piece-definitions/Bishop'
import King from './piece-definitions/King'
import Knight from './piece-definitions/Knight'
import Pawn from './piece-definitions/Pawn'
import Queen from './piece-definitions/Queen'
import Rook from './piece-definitions/Rook'

interface Props {
    pieceKey: string;
}

function renderSwitch(pieceKey: string): ReactElement {
    switch (pieceKey.toLowerCase()){
        case 'b':
            return <Bishop value={pieceKey} />
        case 'k':
            return <King value={pieceKey} />
        case 'n':
            return <Knight value={pieceKey} />
        case 'p':
            return <Pawn value={pieceKey} />
        case 'q':
            return <Queen value={pieceKey} />
        case 'r':
            return <Rook value={pieceKey} />
    }

    return <></>
}

function Piece({ pieceKey }: Props): ReactElement {
    return (
        <div className="board-container-piece">
            {renderSwitch(pieceKey)}
        </div>
    )
}

export default Piece
