import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';

import Board from './Board'

const assertBaseElements = (container: HTMLElement) => {
    expect(container.querySelector('.board-container')).toBeTruthy();
    expect(container.querySelector('.board-container-inner')).toBeTruthy();
};

it("render black name", () => {
    const name = "Testing Name"
    const { container } = render(<Board blackPlayer={name} whitePlayer="" squareArray={[[]]} lastMove={[]}/>)

    assertBaseElements(container);

    expect(container.querySelector(".black-player-name").textContent).toBe("Testing Name");
})

it("render white name", () => {
    const name = "Testing Name"
    const { container } = render(<Board blackPlayer="" whitePlayer={name} squareArray={[[]]} lastMove={[]}/>)

    assertBaseElements(container);

    expect(container.querySelector(".white-player-name").textContent).toBe(name);
})

it("render 1 row of kings", () => {
    const arr = [Array(8).fill("k")]
    const { container } = render(<Board blackPlayer="" whitePlayer="" squareArray={arr} lastMove={[]} />);

    assertBaseElements(container);

    expect(container.querySelectorAll(".king").length).toBe(8);
});

it("render multi row of kings and spaces", () => {
    const arr = [Array(8).fill("k"), Array(8).fill("O"), Array(8).fill("K")]
    const { container } = render(<Board blackPlayer="" whitePlayer="" squareArray={arr} lastMove={[]} />);

    assertBaseElements(container);

    expect(container.querySelectorAll('.board-container-square').length).toBe(24);
    expect(container.querySelectorAll(".king").length).toBe(16);
})