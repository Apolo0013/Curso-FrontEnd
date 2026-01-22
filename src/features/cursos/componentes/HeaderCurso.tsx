import { useAuthStore } from '../../../store/auth.store'
import './HeaderCurso.scss'

function HeaderCurso() {
    //Store Global
    const nome: string = useAuthStore((state) => state.user.nome)

    return (
        <header className='head-curso'>
            <ul>
                <li aria-label='usuario' className='user-conteiner gap-[8px]'>
                    <img
                        src="https://picsum.photos/300"
                        alt="Imagens do usuario"
                        className='user-img'
                    />
                    <p
                        className='user-name'
                    >{nome}</p>
                    <div className="teste"></div>
                </li>
            </ul>
        </header>
    )
}

export default HeaderCurso