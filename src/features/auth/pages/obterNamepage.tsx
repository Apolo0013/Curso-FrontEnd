import BackAuth from "../componentes/BackAuth";
import Entrada from "../componentes/Entrada";
import BotaoAuth from "../componentes/BotaoAuth";
import { Navigate, useLocation } from "react-router-dom";
import useRegistrar from "../hooks/useRegistrar";

function ObterNome() {
    //hook
    const {
        SetNome,
        ClassNome,
        SetClassNome,
        ClickObterNome
    } = useRegistrar()
    //Pegar nome
    const {state}: { state: { isRegister: boolean } } = useLocation()
    //if (false || !state?.isRegister) return <Navigate to='/auth/cadastro' replace />
    return (
        <BackAuth>
            <h1 className="auth-maintitle">Nome</h1>
            <p className="auth-p">Informe o nome que será utilizado como seu nome de usuário.</p>
            <form className="auth-form"
                //submit
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
                }}>
                <Entrada
                    label="Nome"
                    inputType="text"
                    SetValue={SetNome}
                    //set e state class
                    SetClass={SetClassNome}
                    StateClass={ClassNome}
                />
            </form>
            <BotaoAuth text="Confirma" onClick={ClickObterNome}/>
        </BackAuth >
    )
}

export default ObterNome