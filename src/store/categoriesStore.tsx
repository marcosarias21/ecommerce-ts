import { create } from "zustand";
import { Categorie } from "../types/types.d";

type State = {
  categories: Categorie[] | null
  categorieId: Categorie['id'] | null
}

type Action = {
  setCategories: (newCategories: Categorie[]) => void
  setCategorieId: (newCategorieId: Categorie['id']) => void
}

export const useCategoriesStore = create<State & Action>((set) => ({
  categories: null,
  setCategories: (newCategories) => set(({
    categories: newCategories
  })),
  categorieId: null,
  setCategorieId: (newCategorieId) => set(({
    categorieId: newCategorieId
  }))
}))