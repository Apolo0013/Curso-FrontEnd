import ObserverWrapper from '../../../../shared/UI/ObserverWrapper/ObserverWrapper'
import useContent from '../../hook/queries/useContent'

import CardCurso from '../CardCurso/CardCurso'
import './MeusCursos.scss'

function MeusCursos() {
    const { data } = useContent({ idUser: 'user-001' })
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
                {
                    data && data.data
                        ? data.data.map((info, key) => (
                            <CardCurso
                                idCourse={info.idCourse}
                                key={key}
                            />
                        ))
                        : null
                }
            </div>
        </section>
    )
}

export default MeusCursos