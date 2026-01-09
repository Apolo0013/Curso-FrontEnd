//Componetes
import BackAuth from "../componentes/BackAuth"
import Entrada from "../componentes/Entrada"
import BotaoAuth from "../componentes/BotaoAuth"
import OpcaoAuth from "../componentes/OpcaoAuth"
//Rota
import { Link } from "react-router-dom"

function RegistrarPage() {
    return (
        <BackAuth>
            <h1 className="auth-maintitle">Cadastro</h1>
            <p className="auth-p">Cadastre-se para acessar a plataforma.</p>
            <form className="auth-form">
                <Entrada inputType="email" label="Nome" />
                <Entrada inputType="password" label="Senha" key="1" />
                <Entrada inputType="password" label="Senha Novamente" key="2"/>
            </form>
            <BotaoAuth text="Cadastrar" />
            <OpcaoAuth />
            <p className="alternate-loginAndRegister">
                Já possui uma conta? <Link to='/auth/login' className="alternate-auth">Faça login</Link>. 
            </p>
        </BackAuth>
    )
}

export default RegistrarPage