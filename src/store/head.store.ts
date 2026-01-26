import { create } from "zustand";

export type Head = {
    WarnCircleCart: boolean,
    WarnCircleMsg: boolean,
}

export const useHeadStore = create<Head>(() => ({
    WarnCircleCart: false,
    WarnCircleMsg: false
}))