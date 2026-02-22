import { useParams } from 'react-router-dom'
import './SobreCurso.scss'
//Hook
import useCursosQuery from '../../hooks/queries/useCursos'
import useCurso from '../../hooks/logic/useCursos'
//type 
import type { Course } from '../../hooks/logic/type'

function SobreCurso() {
    //pegando paramentro via  rota
    const { idCourse } = useParams()
    //Hook
    const { data } = useCursosQuery()
    const {GetByID} = useCurso()
    //acessanddo o store, e pegandod o curso
    const course: Course | undefined = GetByID(
            data ? data!.data: undefined,
            idCourse!
        )
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
            <ul className='list-check'>
                {
                    course ?
                        course.completionBenefits.map((text, key) => (
                            <li key={key}>{text}</li>
                        ))
                        : <li>Nada</li>
                }   
            </ul>
        </main>
    )
}

export default SobreCurso