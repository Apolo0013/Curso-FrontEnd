//type
//componente
import ObserverWrapper from '../../../../shared/UI/ObserverWrapper/ObserverWrapper'
import useCursosQuery from '../../hooks/useCursosQuery'
import CardCurso from '../CardCurso/CardCurso'
import './Cursos.scss'

function Cursos() {
    const { data } = useCursosQuery()
    const courses = data?.data ?? []
    return (
        <main className='cursos-main'>
            <ObserverWrapper
                x='-100px'
                y='0'
                opacity={0.5}
                duration='0.6s'
                timing_function='ease-in-out'
            >
                <div className='flex flex-col gap-[5px]'>
                    <h1 className='text-4xl font-bold text-main'>Explore nossos Cursos</h1>
                    <p className='text-sg text-xl'>Amplie seu conhecimento com nosso cursos especializados</p>
                </div>
            </ObserverWrapper>
            <div className='cursos-conteiner gap-[10px]'>
                {
                    courses.map((info, k) => (
                        <CardCurso
                            key={k}
                            id={info.id}
                            title={info.title}
                            autor={info.author.name}
                            price={info.price}
                            thumbnail={info.thumbnailUrl}
                        />
                    ))
                }
            </div>
        </main>
    )
}

export default Cursos