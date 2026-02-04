import ObserverWrapper from '../../../../shared/UI/ObserverWrapper/ObserverWrapper'
import CardCursoDash from '../CardCurso/CardCurso'
import './MeusCursos.scss'

function MeusCursos() {
    return (
        <section className="MeusCursos">
            <ObserverWrapper
                duration='0.7s'
                opacity={0}
                timing_function='ease-in-out'
                x='-50px'
                y='0'
            >
                <h2 className='text-main text-xl'>Meus Cursos</h2>
            </ObserverWrapper>
            <div className='grid-cursos-meus-cursos'>
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
                <CardCursoDash />
            </div>
        </section>
    )
}

export default MeusCursos