import './ModuloVisao.scss'
//imagens
import ImgArrow from '../../assets/ico-arrow.svg'
import { useState } from 'react'
//Types
import type { Classes } from '../../../dashboard/services/service.types'
//Componentes
import AulaInfo from '../AulaInfo/AulaInfo'

type Props = {
    title: string
    order: number,
    aulas: Classes[]
}

function ModuloVisao({ order, title, aulas }: Props) {
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

