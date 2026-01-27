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
    Itens: ItemCart[]
}

export const useCartStore = create<CartStore>(() => ({
    Itens: []
}));
