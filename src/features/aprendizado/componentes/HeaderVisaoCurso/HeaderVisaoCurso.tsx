import { useParams } from 'react-router-dom'
import useGetCourseByID from '../../../dashboard/hook/useGetCourseByIdQuery'
import './HeaderVisaoCurso.scss'
import type { Course } from '../../../cursos/hooks/type'

function HeaderVisaoCurso() {
    //pegando id do curso
    const { idCourse } = useParams()
    //Conteudo do curso
    const { data } = useGetCourseByID({ idCourse: idCourse!, keyQuery: idCourse! })
    let content: Course | null = null
    if (data && data.data) {
        content = data.data
    }

    return (
        <header className='header-visao-curso'>
            <div className='w-full h-full flex flex-col gap-2'>
                <h1 className="text-main text-4xl">{content ? content.title : ""}</h1>
                <h2 className='text-sg text-lg'>Por: {content ? content.author.name : ''}</h2>
                <p className='text-sg text-lg'>{content?.summary}</p>
            </div>
            <div className='header-img-curso'>
                <div className="fade-bottom">
                    <img
                        src="https://picsum.photos/seed/frontend/800/450.webp"
                        alt="Imagem do curso"
                    />
                </div>
            </div>
        </header>
    )
}

export default HeaderVisaoCurso