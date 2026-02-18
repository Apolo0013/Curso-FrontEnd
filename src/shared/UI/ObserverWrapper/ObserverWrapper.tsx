//Essa UI vai fazer a entrada suave do compobnentets ondem ele vai receber como filho
import type React from 'react'
import useObserverWrapper from './useObsWrapper'
import { useEffect, useRef, useState } from 'react'
//type 
import type { Style } from './type'

interface Props extends Style {
    children: React.ReactNode,
    timing_function?:
    "ease" |
    "ease-in" |
    "ease-out" |
    "ease-in-out" |
    "linear",
    duration: string,
    threshold?: number
}

function ObserverWrapper({ children, x, y, opacity, timing_function = 'ease-in-out', duration, threshold = 0}: Props) {
    //hook
    const { Observer } = useObserverWrapper()
    //Ref do Conteiner
    const RefConteiner = useRef<HTMLDivElement | null>(null)
    //state para setar a class
    const [Style, SetStyle] = useState<Style>({
        x: x,
        y: y,
        opacity: opacity
    })
    //exibir sim ou nao o filho
    const [childrenview, Setchildrenview] = useState<boolean>(false)

    useEffect(() => {
        if (!RefConteiner.current) return
        Observer({
            SetStyle: SetStyle,
            Setchildrenview: Setchildrenview,
            el: RefConteiner.current,
            threshold: threshold
        })
    }, [])

    return (
        <div
            ref={RefConteiner}
            className='w-full h-full'
            style={{
                transform: `translate(${Style.x}, ${Style.y})`,
                opacity: Style.opacity,
                transition: `${duration} ${timing_function}`
            }}
        >
            {childrenview ? children : null}
        </div>
    )   
}

export default ObserverWrapper