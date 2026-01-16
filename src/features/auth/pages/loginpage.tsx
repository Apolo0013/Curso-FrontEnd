//Componentes
import BackAuth from "../componentes/BackAuth"
import BotaoAuth from "../componentes/BotaoAuth"
import Entrada from "../componentes/Entrada"
import OpcaoAuth from "../componentes/OpcaoAuth"
//Rota
import { Link } from "react-router-dom"
//hook
import useLogin from "../hooks/useLogin"

function LoginPage() {
    //hook
    const {
        SetEmail,
        SetSenha,
        ClassEmail,
        SetClassEmail,
        ClassSenha,
        SetClassSenha,
        ClickLogin
    } = useLogin()
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
                    //Class
                    SetClass={SetClassEmail}
                    StateClass={ClassEmail}
                />
                <Entrada
                    inputType="password"
                    label="Senha"
                    SetValue={SetSenha}
                    //Class
                    SetClass={SetClassSenha}
                    StateClass={ClassSenha}
                />
            </form>
            <BotaoAuth text="login" onClick={ClickLogin}/>
            <OpcaoAuth />
            <p className="alternate-loginAndRegister">
                Não possui conta? <Link to='/auth/cadastro' className="alternate-auth">Cadastre-se</Link>. 
            </p>
        </BackAuth>
    )
}

export default LoginPage