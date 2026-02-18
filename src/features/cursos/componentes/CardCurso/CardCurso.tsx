import { Link } from 'react-router-dom'
import './CardCurso.scss'
import ObserverWrapper from '../../../../shared/UI/ObserverWrapper/ObserverWrapper'

type Props = {
    id: string,
    title: string
    autor: string,
    price: number
    thumbnail: string
}

function CardCurso({title, autor, price, thumbnail, id}: Props) {
    return (
        <ObserverWrapper
            y='50px'
            x='0'
            opacity={0.2}
            duration='0.5s'
            
        >
            <div className='card-curso p-3'>
                <div className="img-card-curso">
                    <img
                        src={thumbnail}
                        width="1280"
                        height="720"
                        loading="lazy"
                        decoding="async"
                        alt="Imagem do curso"
                    />
                </div>
                <div className='w-full flex flex-col h-1/4'>
                    <h2 className='text-main text-2xl'>{title}</h2>
                    <p className='text-sg text-lg'>Professor(a) {autor}</p>
                </div>
                <div className='card-curso-acao'>
                    <div className='card-curso-preco'>
                        <p className='text-base'>R$</p>
                        <p className='text-xl'>{price}</p>
                    </div>
                    <Link
                        className='btn-vercurso'
                        to={"/cursos/ver/" + id}
                    >Ver Curso</Link>
                </div>
            </div>
        </ObserverWrapper>
    )
}

export default CardCurso 