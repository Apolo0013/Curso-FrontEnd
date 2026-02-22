import './AulaInfo.scss'
//imagens
import ImgPlay from '../../assets/ico-play.svg'
import ImgPadLock from '../../assets/ico-padlock.svg'
//type
import type { Classes } from '../../../dashboard/services/service.types'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthStore } from '../../../../store/auth.store'
import useIsAvailable from '../../hook/logic/useIsAvailable'

type Props = {
    aulaInfo: Classes,
    completed: boolean
}

function AulaInfo({ aulaInfo, completed}: Props) {
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
            <div className='w-full h-full row-start-1 row-end-3 flex flex-col justify-center'> 
                <h2 className='text-main text-xl'>{aulaInfo.title}</h2>
                <h3 className='text-sg text-lg'>Aula {aulaInfo.order > 9
                    ? aulaInfo.order
                    : '0' + aulaInfo.order
                }: {aulaInfo.description}</h3>
            </div>
            {/*Avisando se esta completo ou nao*/}
            { 
                completed
                    ?<div className='warn-compled'>
                        <h3>Concluido</h3>
                    </div>
                    : null
            }

        </div>  
    )
} 

export default AulaInfo