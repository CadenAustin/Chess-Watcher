import React from 'react';
import { render, screen } from '@testing-library/react';

import Square from './Square'

const assertBaseElements = (container: HTMLElement) => {
    expect(container.querySelector('.board-container-square')).toBeTruthy();
    expect(container.querySelector('.king')).toBeTruthy();
};

it("render light square", () => {
    const { container } = render(<Square color={true} highlight={false} pieceKey="k" testId="0"/>)
    assertBaseElements(container);

    expect(container.querySelector(".light")).toBeTruthy();
})

it("render dark square", () => {
    const { container } = render(<Square color={false} highlight={false} pieceKey="k" testId="0"/>)
    assertBaseElements(container);

    expect(container.querySelector(".dark")).toBeTruthy();
})

it("render highlighted square", () => {
    const { container } = render(<Square color={true} highlight={true} pieceKey="k" testId="0"/>)
    assertBaseElements(container);

    expect(container.querySelector(".highlight")).toBeTruthy();
})