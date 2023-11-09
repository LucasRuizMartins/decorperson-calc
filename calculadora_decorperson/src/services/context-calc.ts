import { createContext } from "react";


export type ContextCalcType = {
    contextCalcValue: number;
    setContextCalcValue: (contextCalcValue : number) => void; //especifica que é uma função que recebe um dado do tipo number e retorna em um void
}

export const ContextCalcValue = createContext<ContextCalcType>({
    contextCalcValue: 0,
    setContextCalcValue: () =>{}
})







