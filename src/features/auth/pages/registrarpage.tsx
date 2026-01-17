//hook
import useRegistrar from '../hooks/useRegistrar'
//Componetes
import BackAuth from "../componentes/BackAuth"
import Entrada from "../componentes/Entrada"
import BotaoAuth from "../componentes/BotaoAuth"
import OpcaoAuth from "../componentes/OpcaoAuth"
//Rota
import { Link } from "react-router-dom"

function RegistrarPage() {
    //hook
    const {
        ClickRegister,
        //Confirma email
        SetConfirmaSenha,
        //Senha
        SetSenha,
        //Email
        SetEmail,
        //Class das entradas. (warn)
        ClassEmail,
        SetClassEmail,
        ClassSenha,
        SetClassSenha,
        ClassConfirmaSenha,
        SetClassConfirmaSenha,
        //Obter nome
        SetNome,
        ClassNome,
        SetClassNome,
    } = useRegistrar()
    return (
        <BackAuth>
            <h1 className="auth-maintitle">Cadastro</h1>
            <p className="auth-p">Cadastre-se para acessar a plataforma.</p>
            <form className="auth-form"
                //submit
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
                }}
            >
                <Entrada
                    inputType="email"
                    label="Email"
                    SetValue={SetEmail}
                    //Set e State da class, da entrada
                    StateClass={ClassEmail}
                    SetClass={SetClassEmail}
                />
                <Entrada
                    inputType="password"
                    label="Senha"
                    SetValue={SetSenha}
                    //Set e State da class, da entrada
                    SetClass={SetClassSenha}
                    StateClass={ClassSenha}
                    key="1"
                />
                <Entrada
                    inputType="password"
                    label="Senha Novamente"
                    SetValue={SetConfirmaSenha}
                    //Set e State da class, da entrada
                    SetClass={SetClassConfirmaSenha}
                    StateClass={ClassConfirmaSenha}
                    key="2" />
                <Entrada
                    label="Nome"
                    inputType="text"
                    SetValue={SetNome}
                    //set e state class
                    SetClass={SetClassNome}
                    StateClass={ClassNome}
                />
            </form>
            <BotaoAuth text="Cadastrar" onClick={ClickRegister}/>
            <OpcaoAuth />
            <p className="alternate-loginAndRegister">
                Já possui uma conta? <Link to='/auth/login' className="alternate-auth">Faça login</Link>. 
            </p>
        </BackAuth>
    )
}

export default RegistrarPage