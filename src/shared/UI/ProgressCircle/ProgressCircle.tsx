import './ProgressCircle.scss'

function ProgressCircle({ porcento }: { porcento: string }) {
    return (
        <div
            className='progress-circle'
            style={{
                background: `conic-gradient(#85b782 0deg,#85b782 ${porcento}, transparent ${porcento})`
            }}
        >
            <p className='relative z-10 w-full h-full flex flex-center text-main'>{porcento.replace('%', '')}</p>
        </div>
    )
}

export default ProgressCircle