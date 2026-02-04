import BotaoAction from '../../../../shared/UI/ButtonAction/ButtonAction'
import ObserverWrapper from '../../../../shared/UI/ObserverWrapper/ObserverWrapper'
import ProgressBar from '../ProgressBar/ProgressBar'
import './CardCurso.scss'

function CardCursoDash() {
    return (
        <ObserverWrapper
            duration='0.7s'
            opacity={0}
            timing_function='ease-in-out'
            x='0'
            y='50px'
        >
            <div className='card-curso-meus'>
                <div className="w-full h-full">
                    <img
                        src="https://picsum.photos/seed/frontend/800/450.webp" alt="Imagem do cursos"
                    />
                </div>
                <div className='curso-info'>
                    <h2 className='text-2xl text-main mt-[5px]'>React do Zero ao Avancado</h2>
                    <h3 className='text-sg text-base' >Professor(a) Rafael Costa</h3>
                    <ProgressBar porcento='35%' />
                </div>
                <div className='w-full h-full grid grid-cols-2'>
                    <p className='text-sg text-base'>Aula 1: Introducao ao React</p>
                    <BotaoAction
                        bg='#324cab'
                        text='Continuar Curso'
                        height='40px'
                        width='fit-content'
                        className='p-[5px] !text-lg text-main font-semibold justify-self-end self-end'
                    />
                </div>
            </div>
        </ObserverWrapper>
    )
}

export default CardCursoDash