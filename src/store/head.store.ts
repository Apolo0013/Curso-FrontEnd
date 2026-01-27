import { create } from "zustand";

export type Head = {
    WarnCircleMsg: boolean,
}

export const useHeadStore = create<Head>(() => ({
    WarnCircleMsg: false // aviso das mensagem
}))