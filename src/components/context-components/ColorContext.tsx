import React, { useState, ProviderProps } from "react";

interface ColorContextProps {
    colors: Array<string>;
    setColors: (color: any) => void;
}

interface ColorContextProviderProps
  extends Omit<ProviderProps<ColorContextProps>, "value"> {}

export const ColorContext = React.createContext<ColorContextProps>({
    colors: ["6F8F72", "ADBD8F", "95EB8D"], 
    setColors: () => {},
});

export const ColorContextProvider = (props: ColorContextProviderProps) => {
    const [colors, setColors] = useState<string[]>(["6F8F72", "ADBD8F", "95EB8D"]);
    return (
        <ColorContext.Provider value={{ colors, setColors }} {...props} />
    )
}

export const useColorContext = () => {
    const context = React.useContext(ColorContext);
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
    }
    return context;
}