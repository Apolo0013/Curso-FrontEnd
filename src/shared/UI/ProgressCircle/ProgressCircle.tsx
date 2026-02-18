import { useEffect, useState } from 'react'
import './ProgressCircle.scss'

function ProgressCircle({ porcento }: { porcento: string }) {
    const [width, setwidth] = useState<string>('0%')
    useEffect(() => {
        //delay de 500ms antes de aplica a largura
        const timer: number = setTimeout(() => {
            setwidth(porcento)
        }, 500)
        return () => clearTimeout(timer)
    }, [porcento])
    return (
        <div
            className='progress-circle'
            style={{
                background: `conic-gradient(#85b782 0deg ${width}, transparent ${porcento})`
            }}
        >
            <p className='relative z-10 w-full h-full flex flex-center text-main'>{porcento.replace('%', '')}</p>
        </div>
    )
}

export default ProgressCircle