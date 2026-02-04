//Componente
import ObserverWrapper from '../../../../shared/UI/ObserverWrapper/ObserverWrapper'
import CardContinuar from '../CardContinuar/CardContinuar.'
//CSS
import './ContinuarAprendendo.scss'
//aqui vai fica o ultimo curso dele acessado, senao vai pegar o primeiro curso na lista.
function ContinuarAprendendo() {
    return (
        <ObserverWrapper
            duration='0.8s'
            opacity={0}
            timing_function='ease-in-out'
            x='-50px'
            y='0'
        >
            <section className='continuar-aprendendo'>
                <h2 className='text-main text-xl'>Conitnuar aprendendo</h2>
                <CardContinuar />
            </section>
        </ObserverWrapper>
        
    )
}

export default ContinuarAprendendo