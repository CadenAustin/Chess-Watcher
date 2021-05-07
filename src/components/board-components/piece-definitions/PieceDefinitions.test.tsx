import React from 'react';
import { render, screen } from '@testing-library/react';

import Bishop from './Bishop'
import King from './King'
import Knight from './Knight'
import Pawn from './Pawn'
import Queen from './Queen'
import Rook from './Rook'

const assertBaseElements = (container: HTMLElement) => {
    expect(container.querySelector('.piece-image')).toBeTruthy();
};

it("renders black bishop svg", () => {
    const { container } = render(<Bishop value="b"/>)
    assertBaseElements(container)

    const piece: Element = container.querySelector('.piece-image')
    expect(piece.src).toContain("BB.svg")
});

it("renders white bishop svg", () => {
    const { container } = render(<Bishop value="B"/>)
    assertBaseElements(container)

    const piece: Element = container.querySelector('.piece-image')
    expect(piece.src).toContain("WB.svg")
});

it("renders black king svg", () => {
    const { container } = render(<King value="k"/>)
    assertBaseElements(container)

    const piece: Element = container.querySelector('.piece-image')
    expect(piece.src).toContain("BK.svg")
});

it("renders white king svg", () => {
    const { container } = render(<King value="K"/>)
    assertBaseElements(container)

    const piece: Element = container.querySelector('.piece-image')
    expect(piece.src).toContain("WK.svg")
});

it("renders black knight svg", () => {
    const { container } = render(<Knight value="n"/>)
    assertBaseElements(container)

    const piece: Element = container.querySelector('.piece-image')
    expect(piece.src).toContain("BN.svg")
});

it("renders white knight svg", () => {
    const { container } = render(<Knight value="N"/>)
    assertBaseElements(container)

    const piece: Element = container.querySelector('.piece-image')
    expect(piece.src).toContain("WN.svg")
});

it("renders black pawn svg", () => {
    const { container } = render(<Pawn value="p"/>)
    assertBaseElements(container)

    const piece: Element = container.querySelector('.piece-image')
    expect(piece.src).toContain("BP.svg")
});

it("renders white pawn svg", () => {
    const { container } = render(<Pawn value="P"/>)
    assertBaseElements(container)

    const piece: Element = container.querySelector('.piece-image')
    expect(piece.src).toContain("WP.svg")
});

it("renders black queen svg", () => {
    const { container } = render(<Queen value="q"/>)
    assertBaseElements(container)

    const piece: Element = container.querySelector('.piece-image')
    expect(piece.src).toContain("BQ.svg")
});

it("renders white queen svg", () => {
    const { container } = render(<Queen value="Q"/>)
    assertBaseElements(container)

    const piece: Element = container.querySelector('.piece-image')
    expect(piece.src).toContain("WQ.svg")
});

it("renders black rook svg", () => {
    const { container } = render(<Rook value="r"/>)
    assertBaseElements(container)

    const piece: Element = container.querySelector('.piece-image')
    expect(piece.src).toContain("BR.svg")
});

it("renders white rook svg", () => {
    const { container } = render(<Rook value="R"/>)
    assertBaseElements(container)

    const piece: Element = container.querySelector('.piece-image')
    expect(piece.src).toContain("WR.svg")
});
