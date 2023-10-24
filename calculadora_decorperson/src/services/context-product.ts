import { createContext } from "react";

export type ContextProductCountType = {
  contextProductCount: number;
  setContextProductCount: (contextCartCount: number) => void;
};

export const ContextProductCount = createContext<ContextProductCountType>({
  contextProductCount: 0,
  setContextProductCount: () => {},
});


export type ContextProductTotalValueType = {
  contextProductTotalValue : number;
  setContextProductTotalValue:(contextProductTotalValue : number) => void;

}

export const ContextProductTotalValue = createContext<ContextProductTotalValueType>({
  contextProductTotalValue : 0,
  setContextProductTotalValue: () => {},
})