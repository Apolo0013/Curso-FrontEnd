//Componentes
import BackAuth from "../componentes/BackAuth"
import BotaoAuth from "../componentes/BotaoAuth"
import Entrada from "../componentes/Entrada"
import OpcaoAuth from "../componentes/OpcaoAuth"
//Rota
import { Link } from "react-router-dom"
//React metedos
import { useState } from "react"

function LoginPage() {
    //Valor das Entradas
    const [Email, SetEmail] = useState<string>('') // Email
    const [Senha, SetSenha] = useState<string>('') // Senha
    return (
        <BackAuth>
            <h1 className="auth-maintitle">Login</h1>
            <p className="auth-p">Autentique-se para prosseguir.</p>
            <form className="auth-form"
                //submit
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
                }}
            >
                <Entrada
                    inputType="email" // tipo do input
                    label="Email" // label ou placeholder
                    SetValue={SetEmail} // SetState para obter o valor do input
                />
                <Entrada
                    inputType="password"
                    label="Senha"
                    SetValue={SetSenha}
                />
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