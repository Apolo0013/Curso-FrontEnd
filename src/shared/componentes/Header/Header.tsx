//CSS
import './Header.scss'
//react
import { useNavigate, useParams } from 'react-router-dom'
//Store
import { useAuthStore } from '../../../store/auth.store'
import { useCourseStore, type Course } from '../../../store/curso.store'
import { useHeadStore } from '../../../store/head.store'
import { useCartStore } from '../../../store/cart.store'
//imagens
import ImgCart from '../../../assets/ico-carrinho.svg'
import ImgMsg from '../../../assets/ico-mensagem.svg'
import ImgLogo from '../../../assets/imagem/logo.png'
//Componentes
import NavMain from '../NavMain/NavMain'


function Header() {
    //Store Global
    const nome: string = useAuthStore((state) => state.user.nome)
    //id do curso
    const {idCourse } = useParams()
    const course: Course | undefined = useCourseStore(state => state.Course).find(info => info.id == idCourse)
    //store head
    const { WarnCircleMsg } = useHeadStore(state => state)
    //store cart
    const items = useCartStore(state => state.Itens)
    //navagacao por rota
    const nv = useNavigate()
    return (
        <header className='head'>
            <img
                src={ImgLogo}
                alt="Imagem da logo do curso online"
                className='logo asp-1-1'
            />
            <NavMain/>
            <ul>
                {/*notificao/mensagem*/}
                <li className='h-3/6'>
                    <img
                        src={ImgMsg}
                        alt='Imagem de um cartao de email'
                    />
                    {
                        WarnCircleMsg
                            ? <span className="warn-circle"></span>
                            : null
                    }
                </li>
                {/*Carrinho*/}
                <li className='h-3/6'
                    onClick={() => nv('/cursos/carrinho')}
                >
                    <img
                        src={ImgCart}
                        alt="Imagem de um carrinho"
                    />
                    {
                        items.length > 0 // so vai aparece quando estive itens no carrinho
                        ?   <span className="warn-circle-cart">
                                <p>
                                {
                                    items.length <= 9 ? items.length : "+9"
                                }
                                </p>
                            </span>
                        : null
                    }
                </li>
                <li aria-label='usuario' className='user-conteiner gap-[8px]'>
                    <img
                        src="https://picsum.photos/300"
                        alt="Imagens do usuario"
                        className='user-img'
                    />
                    <p
                        className='user-name'
                    >{nome}</p>
                    <div className="slide-low"></div>
                </li>
            </ul>
        </header>
    )
}

export default Header