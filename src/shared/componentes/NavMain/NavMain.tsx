import { useLocation, useNavigate } from 'react-router-dom'
import './NavMain.scss'

function NavMain() {
    const pathname: string = useLocation().pathname
    //navegador das rotas
    const nv = useNavigate()
    return (
        <nav className='nav-main'>
            <ul>
                <li
                    className={pathname.startsWith('/cursos') ? 'target-nav' : ''}
                    onClick={() => nv('/cursos')}
                >Cursos</li>
                <li
                    className={pathname.startsWith('/dashboard') ? "target-nav" : ''}
                    onClick={() => nv('/dashboard')}
                >DashBoard</li>
            </ul>
        </nav>
    )
}

export default NavMain