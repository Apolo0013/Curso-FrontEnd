import './ModuloVisao.scss'
//imagens
import ImgArrow from '../../assets/ico-arrow.svg'
import { useState } from 'react'
//Types
import type { Classes } from '../../../dashboard/services/service.types'
//Componentes
import AulaInfo from '../AulaInfo/AulaInfo'
import useModule from '../../hook/logic/useModule'
import { useParams } from 'react-router-dom'
import { useAuthStore } from '../../../../store/auth.store'
import useGetProgress from '../../hook/queries/useGetProgress'

type Props = {
    title: string
    order: number,
    aulas: Classes[]
}

function ModuloVisao({ order, title, aulas }: Props) {
    //id course e user
    const { idCourse } = useParams()
    const idUser = useAuthStore(state => state.user.id)
    const { data } = useGetProgress({ idUser: idUser, idCourse: idCourse!})
    //HOOK
    const { ThisClassCompleted } = useModule()
    //O botao de mostrar as aula esta ativada?
    const [clickshow, setclickshow] = useState<boolean>(true)
    return (
        <div className="module-view">
            <div className='order-module'>{order}</div>
            <h2 className='text-main text-2xl self-center'>{title}</h2>
            <div className='wraper-view-more-class'>
                <img
                    style={{transform: `rotate(${clickshow? '180deg' : '0deg'})`}}
                    onClick={() => setclickshow(prev => !prev)}
                    src={ImgArrow}
                    alt="imagem do arco para baixo" />
            </div>    
            {/*aulas*/}
            <section className='module-view-aulas' style={{
                display: clickshow ? 'grid' : 'none',
                height: clickshow ? 'auto' : '0'
            }}>
                {
                    aulas.map((info, key) => (
                        <AulaInfo
                            completed={
                                ThisClassCompleted({
                                    idClass: info.idClass,
                                    idCourse: idCourse,
                                    ClasseProgress: data ? data.data : null
                                })}
                            aulaInfo={info}
                            key={key}
                        />
                    ))
                }
            </section>
        </div>
    )
}

export default ModuloVisao

