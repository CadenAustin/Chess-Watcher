import React from 'react';
import { render, screen } from '@testing-library/react';

import Piece from './Piece'

it("render bishop piece component", () => {
    const { container } = render(<Piece pieceKey="b"/>)
    expect(container.querySelector(".bishop")).toBeTruthy();
});

it("render king piece component", () => {
    const { container } = render(<Piece pieceKey="k"/>)
    expect(container.querySelector(".king")).toBeTruthy();
});

it("render knight piece component", () => {
    const { container } = render(<Piece pieceKey="n"/>)
    expect(container.querySelector(".knight")).toBeTruthy();
});

it("render pawn piece component", () => {
    const { container } = render(<Piece pieceKey="p"/>)
    expect(container.querySelector(".pawn")).toBeTruthy();
});

it("render queen piece component", () => {
    const { container } = render(<Piece pieceKey="q"/>)
    expect(container.querySelector(".queen")).toBeTruthy();
});

it("render rook piece component", () => {
    const { container } = render(<Piece pieceKey="r"/>)
    expect(container.querySelector(".rook")).toBeTruthy();
});