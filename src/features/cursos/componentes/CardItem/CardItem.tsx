//UI
import Avatar from '../../../../shared/UI/Avatar'
import BotaoAction from '../../../../shared/UI/ButtonAction'
//hook
import useCarrinho from '../../hooks/useCarrinho'
//scss
import './CardItem.scss'

type Props = {
    id: string,
    srcAvatar: string,
    title: string,
    srcAuthor: string,
    nameAuthor: string
    price: number
}

function CardItem({id ,srcAvatar, title, srcAuthor, nameAuthor, price }: Props) {
    const {onClickRemoveCarrinho} = useCarrinho()
    return (
        <div className='card-item'>
            <img src={srcAvatar} alt="Imagem do curso" className='foto-curso'/>
            <p className='text-xl text-main place-content-center pl-2'>{title}</p>
            <div className='user-item'>
                <span className='h-4/5'>
                    <Avatar src={srcAuthor} alt='Imagem do autor do curso' />
                </span>
                <p className='text-lg text-sg'>{nameAuthor}</p>
            </div>
            <h3 className='item-preco'>R$ {price}</h3>
            <div className="botao-remove">
                <BotaoAction
                    className='text-sg'
                    text='Remover'
                    bg='#1a1c31'
                    height='100%'
                    width='50%'
                    onClick={() => onClickRemoveCarrinho(id)}
                />
            </div>
        </div>
    )
}

export default CardItem