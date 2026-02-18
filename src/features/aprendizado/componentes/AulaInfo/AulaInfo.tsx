import './AulaInfo.scss'
//imagens
import ImgPlay from '../../assets/ico-play.svg'
import ImgPadLock from '../../assets/ico-padlock.svg'
//type
import type { Classes } from '../../../dashboard/services/service.types'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthStore } from '../../../../store/auth.store'
import useIsAvailable from '../../hook/useAprendizado'

type Props = {
    aulaInfo: Classes
}

function AulaInfo({ aulaInfo }: Props) {
    //pegando o id do course via rota
    const { idCourse } = useParams()
    //id user
    const idUser = useAuthStore(state => state.user.id)
    //navegador de rotas
    const nv = useNavigate()
    //HOOK
    const available = useIsAvailable({
        idClass: aulaInfo.idClass,
        idCourse: idCourse!,
        idUser: idUser
    })

    return (
        <div className={`aula-info ${!available ? 'aula-info-lock' : ''}`}>
            <div className="play-aula-btn"
                onClick={() => nv(`/dashboard/${idCourse}/aula/${aulaInfo.idClass}`)} 
            >
                <img src={
                available
                    ? ImgPlay
                    : ImgPadLock
                } alt="Imagem de reproduzir video" />
            </div>
            <h2 className='text-main text-xl self-center'>{aulaInfo.title}</h2>
            <h3 className='text-sg text-lg'>Aula {aulaInfo.order > 9
                ? aulaInfo.order
                : '0' + aulaInfo.order
            }: {aulaInfo.description}</h3>
        </div>  
    )
}

export default AulaInfo