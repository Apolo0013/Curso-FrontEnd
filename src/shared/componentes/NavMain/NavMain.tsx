import { useNavigate } from 'react-router-dom'
import './NavMain.scss'

function NavMain() {
    //navegador das rotas
    const nv = useNavigate()
    return (
        <nav className='nav-main'>
            <ul>
                <li onClick={() => nv('/cursos')}>Cursos</li>
                <li>DashBoard</li>
            </ul>
        </nav>
    )
}

export default NavMain