//CSS
import './Header.scss'
//react
import { useParams } from 'react-router-dom'
//Store
import { useAuthStore } from '../../../store/auth.store'
import { useCourseStore, type Course } from '../../../store/curso.store'
//imagens
import ImgCart from '../../../assets/ico-carrinho.svg'
import ImgMsg from '../../../assets/ico-mensagem.svg'
import { useHeadStore } from '../../../store/head.store'

function Header() {
    //Store Global
    const nome: string = useAuthStore((state) => state.user.nome)
    //id do curso
    const {idCourse } = useParams()
    const course: Course | undefined = useCourseStore(state => state.Course).find(info => info.id == idCourse)
    //store head
    const {WarnCircleCart, WarnCircleMsg} = useHeadStore(state => state)
    return (
        <header className='head'>
            <ul>
                {/*notificao/mensagem*/}
                <li className='h-3/6'
                    onClick={() => useHeadStore.setState((prev) => ({
                        WarnCircleCart: prev.WarnCircleCart,
                        WarnCircleMsg: !prev.WarnCircleMsg
                    }))}
                >
                    <img
                        src={ImgMsg}
                        alt='Imagem de um cartao de email'
                    />
                    {
                        WarnCircleMsg
                            ?<span className="warn-circle"></span>
                            : null
                    }
                </li>
                {/*Carrinho*/}
                <li className='h-3/6'
                    onClick={() => useHeadStore.setState((prev) => ({
                        WarnCircleCart: !prev.WarnCircleCart,
                        WarnCircleMsg: prev.WarnCircleMsg
                    }))}
                >
                    <img
                        src={ImgCart}
                        alt="Imagem de um carrinho"
                    />
                    {
                        WarnCircleCart 
                            ? <span className="warn-circle"></span>
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