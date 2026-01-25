import { useParams } from 'react-router-dom'
import './SobreCurso.scss'
import { useCourseStore, type Course } from '../../../../store/curso.store'

function SobreCurso() {
    //pegando paramentro via  rota
    const { idCourse } = useParams()
    //acessanddo o store, e pegandod o curso
    const course: Course | undefined = useCourseStore(state => state.Course).find(info => info.id == idCourse)
    return (
        <main className="sobre-curso">
            <h2 className='title-sobre-curso'>Sobre o Curso</h2>
            <h3 className='sub-title-curso'>O que você vai aprende</h3>
            <ul className='list-check'>
                {
                    course
                        ? course.learningOutcomes.map((text, key) => (
                            <li key={key}>{text}</li>
                        ))
                        : <li>Nada</li>
                }
            </ul>

            <h3 className='sub-title-curso'>Para quem é este curso</h3>
            <ul className='list-check'>
                {
                    course 
                        ? course.targetAudience.map((text, key) => (
                            <li key={key}>{text}</li>
                        ))
                        : <li>Nada</li>
                }
            </ul>

            <h3 className='sub-title-curso'>Requisitos</h3>
            <ul className='list-check'>
                {
                    course 
                        ? course.prerequisites.map((text, key) => (
                            <li key={key}>{text}</li>
                        ))
                        : <li>Nada</li>
                }
            </ul>

            <h3 className='sub-title-curso'>Ao final do curso</h3>
            <p className='paragrafo-sobre-curso'>
                <ul className='list-check'>
                    {
                        course ?
                            course.completionBenefits.map((text, key) => (
                                <li key={key}>{text}</li>
                            ))
                            : <li>Nada</li>
                    }   
                </ul>
            </p>
        </main>
    )
}

export default SobreCurso