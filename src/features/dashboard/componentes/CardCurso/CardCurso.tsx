import './CardCurso.scss'
//Componentes
import BotaoAction from '../../../../shared/UI/ButtonAction/ButtonAction'
import ObserverWrapper from '../../../../shared/UI/ObserverWrapper/ObserverWrapper'
import ProgressBar from '../../../../shared/UI/ProgressBar/ProgressBar'
//Type
import type { Course } from '../../../cursos/hooks/logic/type'
//HOOK
import { useNavigate } from 'react-router-dom'
import useDashBoard from '../../hook/logic/useDashBoard'
import useGetCourseByID from '../../hook/queries/useGetCourseById'
import useGetProgress from '../../../aprendizado/hook/queries/useGetProgress'
import { useAuthStore } from '../../../../store/auth.store'

type Props = {
    idCourse: string
}

function CardCurso({ idCourse }: Props) {
    //idUser
    const idUser = useAuthStore(state => state.user.id)
    //pegando informacao do curso
    const { data } = useGetCourseByID({ idCourse: idCourse, keyQuery: idCourse })
    const info: Course | null = data ? data.data : null
    //Hook
    const {
        GetProgressCourse,
        CurrentClass
    } = useDashBoard()
    //Porcentual do curso
    const percent = GetProgressCourse(idCourse) + "%"
    //Pegando as aulas em progressos
    const ClassProgress = useGetProgress({idCourse: idCourse, idUser: idUser})
    //Pegando a orde numerica e o nome da aula atual
    const infoClass = CurrentClass({
        ClasseProgress: ClassProgress && ClassProgress.data
            ? ClassProgress.data.data
            : null,
        idCourse: idCourse
    })
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
                <div className='w-full h-full grid grid-cols-[1.5fr_1fr]'>
                    <p className='text-sg text-base'>Aula {infoClass ? infoClass.NumberClass : ""}: {infoClass ? infoClass.NameClass : ""}</p>
                    <BotaoAction
                        bg='#324cab'
                        text='Continuar Curso'
                        height='40px'
                        className='p-[5px] !text-lg text-main font-semibold justify-self-end self-end'
                        onClick={() => nv(`/dashboard/${idCourse}`)}
                    />
                </div>
            </div>
        </ObserverWrapper>
    )
}

export default CardCurso