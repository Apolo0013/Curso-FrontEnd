import type { Dispatch, SetStateAction } from "react"

export interface Style {
    x: string,
    y: string,
    opacity: number
}

export type ParamObserver = {
    SetStyle: Dispatch<SetStateAction<Style>>,
    Setchildrenview: Dispatch<SetStateAction<boolean>>
    el: HTMLDivElement
    //Config
    threshold?: number
}