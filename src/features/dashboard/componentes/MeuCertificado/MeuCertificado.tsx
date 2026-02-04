import './MeuCertificado.scss'
//Imagens
import ImgCertificado from '../../assets/ico-certificado.svg'
import BotaoAction from '../../../../shared/UI/ButtonAction/ButtonAction'
import ObserverWrapper from '../../../../shared/UI/ObserverWrapper/ObserverWrapper'

function MeuCertificado() {
    return (
        <ObserverWrapper
            duration='0.6s'
            opacity={0}
            timing_function='ease-in-out'
            x='50px'
            y='0'
        >
            <section className="MeuCertificado">
                <span className='grid grid-cols-[3fr_2fr] w-full h-full'>
                    <h2 className='text-main text-xl flex items-center justify-start'>Meus Certificados</h2>
                    <h3 className="view-all self-center justify-self-end">Ver todos</h3>
                </span>
                {/*MC é uma sigla de MeuCertificado*/}
                <div className='MC-info'>
                    <img
                        src={ImgCertificado}
                        alt="Imagem do certificado"
                    />
                    <h2 className='text-main text-2xl mt-[5px]'>Advaced CSS and Animation</h2>
                    <h3 className='text-sg text-base'>Professor(a) Fernanda Rocha</h3>
                </div>
                <BotaoAction
                    bg='#324cab'
                    text='Ver Certificado'
                    height='40px'
                    width='fit-content'
                    className='p-[5px] !text-lg text-main font-semibold justify-self-end self-end'
                />
            </section>
        </ ObserverWrapper >
        
    )
}

export default MeuCertificado