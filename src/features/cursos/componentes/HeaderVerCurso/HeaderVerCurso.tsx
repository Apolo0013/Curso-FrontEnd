import './HeaderVerCurso.scss'
//React
import { useParams } from 'react-router-dom'
//Type
import type { Course } from '../../hooks/type'
//UI
import Avatar from '../../../../shared/UI/Avatar/Avatar'
import useCursosQuery from '../../hooks/useCursosQuery'
import useCurso from '../../hooks/useCursos'

function HeaderVerCurso() {
    //id curso
    const { idCourse } = useParams()
    //Hook
    const { data } = useCursosQuery()
    const {GetByID} = useCurso()
    //pegando o curso via store
    const course: Course | undefined = GetByID(
        data ? data!.data: undefined,
        idCourse!
    )
    return (
        <header className="flex flex-col w-full head-verCurso">
            <h1 className="text-main text-4xl">{
                course ? course.title : "Nada"
            }</h1>
            <div className="autor-cursoVer">
                <Avatar
                    src={course ? course.author.srcAvatar : "#"}
                    alt='imagem do autor'
                />
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