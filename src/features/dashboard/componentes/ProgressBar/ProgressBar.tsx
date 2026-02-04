import { useEffect, useState } from 'react'
import './ProgressBar.scss'

function ProgressBar({ porcento }: { porcento: string }) {
    const [width, setwidth] = useState<string>('0%')
    useEffect(() => {
        const timer = setTimeout(() => {
            setwidth(porcento)
        }, 500)
        return () => clearTimeout(timer)
    }, [porcento])
    return (
        <div className='progress-bar'>
            <div className="back-bar">
                <div className='bar' style={{
                    width: width
                }}></div>
            </div>
            <p className='text-main w-full h-full text-xl flex justify-center items-center'>{porcento}</p>
        </div>
    )
}

export default ProgressBar