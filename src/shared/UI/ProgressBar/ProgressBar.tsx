import { useEffect, useState } from 'react'
import './ProgressBar.scss'

type Props = {
    porcento: string,
    withText?: boolean
}

function ProgressBar({ porcento, withText = true}: Props) {
    const [width, setwidth] = useState<string>('0%')
    const [porcentNumber, setporcentNumber] = useState<number>(1)
    useEffect(() => {
        //um atrado ao add a largura do progress
        const timer = setTimeout(() => {
            setwidth(porcento)
        }, 500)
        return () => clearTimeout(timer)
    }, [porcento])

    useEffect(() => {
        const target: number = Number(porcento.replaceAll("%", '')) - 1

        const timer: number = setInterval(() => {
            setporcentNumber(prev => {
                if (prev == target) 
                    clearInterval(timer)
                return prev + 1
            })
            
        }, 25)
        return () => clearInterval(timer)
    }, [porcento])

    return (
        <div className={`progress-bar ${withText ? ' gap-2' : ''}`}>
            <div className={
                `back-bar ${withText
                    ? ' '
                    : ' !col-start-1 !col-end-3 '}`
            }>
                <div className='bar' style={{
                    width: width
                }}></div>
            </div>
            {
                withText
                    ? <p className='text-main w-full h-full text-xl flex justify-center items-center'>
                        {porcentNumber + "%"}
                    </p>
                    : null
                }
            
        </div>
    )
}

export default ProgressBar