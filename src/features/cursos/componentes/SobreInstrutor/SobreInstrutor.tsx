import { useParams } from 'react-router-dom'
import './SobreInstrutor.scss'
//UI
import Avatar from '../../../../shared/UI/Avatar/Avatar'
//Hook
import useCursos from '../../hooks/logic/useCursos'
//type
import type { Course } from '../../hooks/logic/type'
import useGetAllCourses from '../../../../shared/hook/queries/useGetAllCourses'

function SobreInstrutor() {
    //pegando o id do cursos via rotas
    const { idCourse } = useParams()
    //Hook
    const { data } = useGetAllCourses()
    const {GetByID} = useCursos()
    const course : Course | undefined = GetByID(
        data ? data!.data: undefined,
        idCourse!
    )
    return (
        <main className="sobre-instrutor">
            {/*area ondem vai fica a foto e o nome do instrutor*/}
            <div className='instrutor'>
                <Avatar src={course ? course.author.srcAvatar : "#"} alt="Foto do instrutor" />
                <h3>Sobre o Instrutor</h3>
                <h3>{course ? course.author.name : "Ninguem"}</h3>
            </div>
            {/*Sobre o instrutor*/}
            <p className='w-full text-sg text-lg'>
                {course ? course.author.about : "..."}
            </p>    
        </main>
    )
}

export default SobreInstrutor