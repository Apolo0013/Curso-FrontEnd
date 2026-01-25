import './HeaderVerCurso.scss'
import { useParams } from 'react-router-dom'
import { useCourseStore, type Course } from '../../../../store/curso.store'

function HeaderVerCurso() {
    //id curso
    const { idCourse } = useParams()
    //pegando o curso via store
    const course: Course | undefined = useCourseStore(state => state.Course).find(info => info.id == idCourse)
    return (
        <header className="flex flex-col w-full head-verCurso">
            <h1 className="text-main text-4xl">{
                course ? course.title : "Nada"
            }</h1>
            <div className="autor-cursoVer">
                <img src='https://picsum.photos/300' alt="imagem do autor do  curso" />
                <p className='text-sg text-xl'>{
                    course ? course.author.name : "Ninguem"
                }</p>
            </div>
            <p className='text-sg text-xl mt-5'>{
                course ? course.description :  "Nenhuma descricao"
            }</p>
        </header>
    )
}

export default HeaderVerCurso