import React, { ReactElement } from 'react'
import { Headline, LabeledInput } from '@itwin/itwinui-react'

import { useColorContext } from '../../context/ColorContext'
import "./Header.css"

function Header(): ReactElement {
    const { colors, setColors } = useColorContext()

    const inputColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        let prevColors = [...colors]
        let colorIndex = 0;

        switch (e.target.id) {
            case "nav-light-input":
                colorIndex = 0;
                break;
            case "nav-dark-input":
                colorIndex = 1;
                break;
            case "nav-highlight-input":
                colorIndex = 2;
                break;
            default:
                break;
        }

        let colorString = (e.target.value).toUpperCase()
        let regexMatch = /[0-9A-F]{6}/i;
        if (colorString.match(regexMatch) && colorString.length === 6){
            prevColors[colorIndex] = colorString;
            setColors(prevColors);
        }
        return;
    }


    return (
        <div className="nav-bar">
            <Headline><a href="/">Chess Watcher</a></Headline>
            <div className="nav-bar-right">
                <LabeledInput onChange={inputColor} label="Light Square" placeholder={colors[0]} id="nav-light-input"/>
                <LabeledInput onChange={inputColor} label="Dark Square" placeholder={colors[1]} id="nav-dark-input"/>
                <LabeledInput onChange={inputColor} label="Highlight" placeholder={colors[2]} id="nav-highlight-input"/>
            </div>
        </div>
    );
}

export default Header
