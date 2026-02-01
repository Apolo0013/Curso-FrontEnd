import { create } from "zustand";

type Author = {
    name: string,
    srcAvatar: string
}

export type ItemCart = {
    id: string
    title: string,
    thumbnailUrl: string,
    price: number,
    author: Author
}

type CartStore = {
    Itens: ItemCart[],
    Add: (item: ItemCart) => void,
    Remove: (id: string) => void
}

export const useCartStore = create<CartStore>((set) => ({
    Itens: [],
    Add: (item: ItemCart) => set(prev => (
        {
            Itens: [
                ...prev.Itens,
                item
            ]
        }
    )),
    Remove: (id: string) => set(prev => ({
        Itens: prev.Itens.filter(info => info.id !== id)
    }))
}))