
import './CardCurso.scss'
//Componentes
import BotaoAction from '../../../../shared/UI/ButtonAction/ButtonAction'
import ObserverWrapper from '../../../../shared/UI/ObserverWrapper/ObserverWrapper'
import ProgressBar from '../../../../shared/UI/ProgressBar/ProgressBar'
//Type
import type { Course } from '../../../cursos/hooks/type'
//HOOK
import { useNavigate } from 'react-router-dom'
import useDashBoard from '../../hook/useDashBoard'
import { useAuthStore } from '../../../../store/auth.store'
import useGetCourseByID from '../../hook/useGetCourseByIdQuery'

type Props = {
    idCourse: string
}

function CardCursoDash({ idCourse }: Props) {
    //pegando o id do usuario
    const idUser = useAuthStore(state => state.user.id)
    //pegando informacao do curso
    const { data } = useGetCourseByID({ idCourse: idCourse, keyQuery: idCourse })
    const info: Course | null = data ? data.data : null
    //Hook
    const { GetProgressCourse } = useDashBoard()
    const percent = GetProgressCourse({ idCourse: idCourse, idUser: idUser }) + "%"
    //Navegador das rotas
    const nv = useNavigate()
    return (
        <ObserverWrapper
            duration='0.7s'
            opacity={0}
            timing_function='ease-in-out'
            x='0'
            y='50px'
            threshold={0.3}
        >
            <div className='card-curso-meus'>
                <div className="w-full h-full">
                    <img
                        src={info ? info.thumbnailUrl : '#'}
                        alt="Imagem do cursos"
                    />
                </div>
                <div className='curso-info'>
                    <h2 className='text-2xl text-main mt-[5px]'>{info ? info.title : ""}</h2>
                    <h3 className='text-sg text-base' >Professor(a) {info ? info.author.name : ""}</h3>
                    <ProgressBar porcento={percent} />
                </div>
                <div className='w-full h-full grid grid-cols-2'>
                    <p className='text-sg text-base'>Aula 1: Introducao ao React</p>
                    <BotaoAction
                        bg='#324cab'
                        text='Continuar Curso'
                        height='40px'
                        width='fit-content'
                        className='p-[5px] !text-lg text-main font-semibold justify-self-end self-end'
                        onClick={() => nv(`/dashboard/${idCourse}`)}
                    />
                </div>
            </div>
        </ObserverWrapper>
    )
}

export default CardCursoDash