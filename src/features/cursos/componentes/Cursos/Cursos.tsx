import { useCourseStore, type Course } from '../../../../store/curso.store'
import CardCurso from '../CardCurso/CardCurso'
import './Cursos.scss'

function Cursos() {
    const courses: Course[] = useCourseStore(state => state.Course)
    return (
        <main className='cursos-main'>
            <div className='flex flex-col gap-[5px]'>
                <h1 className='text-4xl font-bold text-main'>Explore nossos Cursos</h1>
                <p className='text-sg text-xl'>Amplie seu conhecimento com nosso cursos especializados</p>
            </div>
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