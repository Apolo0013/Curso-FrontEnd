import { useNavigate } from 'react-router-dom'
import BotaoAction from '../../../../shared/UI/ButtonAction'
import './ResumoCart.scss'

function ResumoCart() {
    //navagador de rotas
    const nv = useNavigate()
    return (
        <main className='wraper-resumo-cart'>
            <div className="resumo-cart">
                <h2 className='text-main text-4xl'>Resumo</h2>
                <div className='flex flex-col mt-2'>
                    <span className='resumo'>
                        <h3 className='discount-text'>Subtotal</h3>
                        <p className='discount-price'>R$ 100</p>
                    </span>
                    <span className='resumo'>
                        <h3 className='tax-text'>Total</h3>
                        <p className="tax-price">R$ 100</p>
                    </span>
                </div>
                <div className='flex flex-col gap-2'>
                    <BotaoAction
                        text='Finalizar Compra'
                        bg='#f4c23f'
                        height='60px'
                    />
                    <BotaoAction
                        text='Continuar Comprando'
                        bg='#2945c2'
                        height='60px'
                        color='white'
                        onClick={() => nv('/cursos')}
                    />
                </div>
            </div>
        </main>
    )
}

export default ResumoCart