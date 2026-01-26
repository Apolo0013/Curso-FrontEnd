import { useParams } from 'react-router-dom'
import './SobreInstrutor.scss'
import { useCourseStore, type Course } from '../../../../store/curso.store'
//UI
import Avatar from '../../../../shared/UI/Avatar'

function SobreInstrutor() {
    //pegando o id do cursos via rotas
    const { idCourse } = useParams()
    //pegando o curso pelo store
    const course: Course | undefined = useCourseStore((state) => state.Course).find(info => info.id == idCourse)
    return (
        <main className="sobre-instrutor">
            {/*area ondem vai fica a foto e o nome do instrutor*/}
            <div className='instrutor'>
                <Avatar src={course ? course.author.srcAvatar : ""} alt="Foto do instrutor" />
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