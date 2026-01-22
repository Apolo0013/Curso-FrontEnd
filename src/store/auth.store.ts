import { create } from "zustand";
//Type
import type {TUser} from '../features/auth/services/service.type'

type TAuthStore = {
    user: TUser
}

export const useAuthStore = create<TAuthStore>((set) => ({
    user: {
        id: "",
        nome: "Apolonio",
        role: "ADMIN"
    },
    //Seta usuario
    SetUser: (user: TUser) => set({user: user})
}))