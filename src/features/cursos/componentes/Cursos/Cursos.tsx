//type
//componente
import ObserverWrapper from '../../../../shared/UI/ObserverWrapper/ObserverWrapper'
import useGetAllCourses from '../../../../shared/hook/queries/useGetAllCourses'
import type { Course } from '../../hooks/logic/type'
import CardCurso from '../CardCurso/CardCurso'
import './Cursos.scss'

function Cursos() {
    const { data } = useGetAllCourses()
    const courses: Course[] | null = data && data.data ? data.data : null
    return (
        <main className='cursos-main'>
            <div className='w-full h-fit'>
                <ObserverWrapper
                x='-100px'
                y='0'
                opacity={0.5}
                duration='0.6s'
                timing_function='ease-in-out'
                >
                    <div className='flex flex-col gap-[5px] w-full h-full'>
                        <h1 className='text-4xl font-bold text-main'>Explore nossos Cursos</h1>
                        <p className='text-sg text-xl'>Amplie seu conhecimento com nosso cursos especializados</p>
                    </div>
                </ObserverWrapper>
            </div>    
            <div className='cursos-conteiner gap-[10px]'>
                {
                    courses
                        ? courses.map((info, k) => (
                            <CardCurso
                                key={k}
                                id={info.id}
                                title={info.title}
                                autor={info.author.name}
                                price={info.price}
                                thumbnail={info.thumbnailUrl}
                            />
                        ))
                        : null
                }
            </div>
        </main>
    )
}

export default Cursos