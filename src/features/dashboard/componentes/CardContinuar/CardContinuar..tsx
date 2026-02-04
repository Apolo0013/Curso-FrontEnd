import BotaoAction from '../../../../shared/UI/ButtonAction/ButtonAction'
import ProgressBar from '../ProgressBar/ProgressBar'
import './CardContinuar.scss'

function CardContinuar() {
    return (
        <div className='card-continuar-aprendendo'>
            <img
                src="https://picsum.photos/seed/frontend/800/450.webp"
                alt="Imagem do curso"
            />
            {/*CA é uma sigla de continuar aprendendo*/}
            <div className='card-CA-info'>
                <div className='w-full h-full'>
                    <h3 className='next-course-h3 text-base'>Seu proximo curso</h3>
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
        </div>
    )
}

export default CardContinuar