import './CardCurso.scss'

type Props = {
    title: string;
    autor: string,
    price: number;
    thumbnail: string
}

function CardCurso({title, autor, price, thumbnail}: Props) {
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
                <button className='btn-vercurso'>Ver Curso</button>
            </div>
        </div>
    )
}

export default CardCurso 