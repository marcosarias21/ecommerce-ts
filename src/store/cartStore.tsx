import { create } from "zustand";
import { Picture } from "../types/productDetail.d";

type Product = {
  id: string,
  name: string,
  image: Picture['url'],
  price: number,
}

type State = {
  cart: Product[]
}

type Action = {
  addProductCart: (newProduct: Product) => void
  deleteProductCart: (id: Product['id']) => void
}

export const useCartStore = create<State & Action>((set) => ({
  cart: [],
  addProductCart: (newProduct) => set((state) => ({
    cart: [...state.cart, newProduct ]
  })),
  deleteProductCart: (id) => set((state) => ({
    cart: state.cart.filter(product => product.id != id)
  }))
}))