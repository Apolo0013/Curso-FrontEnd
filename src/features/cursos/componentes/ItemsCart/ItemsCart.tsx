import { useCartStore } from '../../../../store/cart.store'
import CardItem from '../CardItem/CardItem'
import './ItemsCart.scss'
//imagens
import ImgCarrinhoVazio from '../../../../assets/ico-carrinho-vazio.svg'

//Fala pro usuario que nao tem nenhum item no carrinho.
function NenhumItemCarrinho() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <img
                src={ImgCarrinhoVazio}
                alt="Imagem de carrinho vazio"
                className='asp-1-1 h-[100px]'
            />
            <h3 className='text-main text-3xl'>Nenhum item no carrinho</h3>
        </div>
    )
}

function ItemsCarrinho() {
    //pegando o itens 
    const items = useCartStore(state => state.Itens)
    return (
        <main className="wraper-items-cart">
            <div className='items-cart'>
                <h2 className='text-main text-2xl pl-3'>Itens no Carrinho</h2>
                <div className='w-full h-full flex flex-col gap-5'>
                    {/*Items que estao no carrinho*/}
                    {
                        items.length == 0
                            ? <NenhumItemCarrinho />
                            : items.map((info, k) => (
                                <CardItem
                                    key={k}
                                    id={info.id}
                                    title={info.title}
                                    srcAvatar={info.thumbnailUrl}
                                    nameAuthor={info.author.name}
                                    srcAuthor={info.author.srcAvatar}
                                    price={info.price}
                                />
                            ))
                    }
                </div>
            </div>
        </main>
    )
}

export default ItemsCarrinho