import { create } from "zustand";
import { colorVariationsObj } from "../types/coloursAvaiable";

type State = {
  indexImg: number,
  colour: colorVariationsObj['nameColor'],
}

type Action = {
  updateIndexImg: (newIndex: number) => void
  getColourText: (newColour: colorVariationsObj['nameColor']) => void  
}

export const useProductStore = create<State & Action>((set) => ({
  indexImg: 0,
  updateIndexImg: (newIndex) => set({
    indexImg: newIndex
  }),
  colour: '',
  getColourText: (newColour) => set({
    colour: newColour
  })
}))