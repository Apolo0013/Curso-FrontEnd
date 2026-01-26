import { create } from "zustand";

type Author = {
    name: string,
    srcAvatar: string
}

type ItemCart = {
    name: string,
    thumbnailUrl: string,
    price: number,
    author: Author
}

type CartStore = {
    Itens: ItemCart[]
}

export const useCartStore = create<CartStore>(() => ({
  Itens: [
    {
      name: "Frontend Fundamentals",
      thumbnailUrl: "https://picsum.photos/seed/cart1/320/180",
      price: 149.9,
      author: {
        name: "Lucas Andrade",
        srcAvatar: "https://picsum.photos/seed/author1/100"
      }
    },
    {
      name: "Advanced CSS Layouts",
      thumbnailUrl: "https://picsum.photos/seed/cart2/320/180",
      price: 199.9,
      author: {
        name: "Marina Souza",
        srcAvatar: "https://picsum.photos/seed/author2/100"
      }
    },
    {
      name: "React in Practice",
      thumbnailUrl: "https://picsum.photos/seed/cart3/320/180",
      price: 279.9,
      author: {
        name: "Fernanda Lima",
        srcAvatar: "https://picsum.photos/seed/author4/100"
      }
    }
  ]
}));
