//Componentes
import BackAuth from "../componentes/BackAuth"
import BotaoAuth from "../componentes/BotaoAuth"
import Entrada from "../componentes/Entrada"
import OpcaoAuth from "../componentes/OpcaoAuth"
//Rota
import { Link } from "react-router-dom"


function LoginPage() {
    return (
        <BackAuth>
            <h1 className="auth-maintitle">Login</h1>
            <p className="auth-p">Autentique-se para prosseguir.</p>
            <form className="auth-form">
                <Entrada inputType="email" label="Nome" />
                <Entrada inputType="password" label="Senha"/>
            </form>
            <BotaoAuth text="login" />
            <OpcaoAuth />
            <p className="alternate-loginAndRegister">
                Não possui conta? <Link to='/auth/cadastro' className="alternate-auth">Cadastre-se</Link>. 
            </p>
        </BackAuth>
    )
}

export default LoginPage