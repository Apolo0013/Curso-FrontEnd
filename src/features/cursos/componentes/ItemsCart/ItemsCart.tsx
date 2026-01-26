import { useCartStore } from '../../../../store/cart.store'
import CardItem from '../CardItem/CardItem'
import  './ItemsCart.scss'

function ItemsCarrinho() {
    //pegando o itens 
    const items = useCartStore(state => state.Itens)
    return (
        <main className="wraper-items-cart">
            <div className='items-cart'>
                <h2 className='text-main text-2xl pl-3'>Itens no Carrinho</h2>
                <div className='w-full flex flex-col gap-5'>
                    {/*Items que estao no carrinho*/}
                    {
                        items.map((info, k) => (
                            <CardItem
                                key={k}
                                name={info.name}
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