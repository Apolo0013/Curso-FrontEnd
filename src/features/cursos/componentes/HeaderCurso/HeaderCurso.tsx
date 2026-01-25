import { useParams } from 'react-router-dom'
import { useAuthStore } from '../../../../store/auth.store'
import './HeaderCurso.scss'
import { useCourseStore, type Course } from '../../../../store/curso.store'

function HeaderCurso() {
    //Store Global
    const nome: string = useAuthStore((state) => state.user.nome)
    //id do curso
    const {idCourse } = useParams()
    const course: Course | undefined = useCourseStore(state =>  state.Course).find(info => info.id == idCourse)

    return (
        <header className='head-curso'>
            <ul>
                <li aria-label='usuario' className='user-conteiner gap-[8px]'>
                    <img
                        src="https://picsum.photos/300"
                        alt="Imagens do usuario"
                        className='user-img'
                    />
                    <p
                        className='user-name'
                    >{nome}</p>
                    <div className="slide-low"></div>
                </li>
            </ul>
        </header>
    )
}

export default HeaderCurso