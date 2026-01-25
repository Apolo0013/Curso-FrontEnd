import { Link } from 'react-router-dom'
import './CardCurso.scss'

type Props = {
    id: string,
    title: string
    autor: string,
    price: number
    thumbnail: string
}

function CardCurso({title, autor, price, thumbnail, id}: Props) {
    return (
        <div className='card-curso p-3'>
            <img
                src={thumbnail}
                alt="Imagem do curso"
            />
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
    )
}

export default CardCurso 