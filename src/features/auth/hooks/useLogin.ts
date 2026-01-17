import { useState } from "react"
//type
import type {ClassWarnEntrada, ReturnFNValideEntrada} from './hook.type'
import { toast } from "react-toastify"
//Service
import useLoginService from "../services/useLoginAuth"
//Mensagem
import { authEntryMessages, authMessagesBackEnd } from "../../../shared/mensagem/auth.mensagem"
//valida
import { TrataEntryLogin } from "../valida/valida.login"

function useLogin() {
    //funcao hancdler clica botao auth, loginpage.tsx
    async function ClickLogin() {
        const {sucesso, code }: ReturnFNValideEntrada = await TrataEntryLogin({
            email: Email,
            senha: Senha
        })
        if (sucesso) {
            // aqui ja sabemos que ta tudo certo com as entradas.
            // vamos fazer contato com backend, e ver ele retorna ok, em questao de autenticado.
            try {
                const {code, sucesso} = await mtLogin.mutateAsync({
                    email: Email,
                    senha: Senha
                })

                if (sucesso) { // deu certo, usuario existi
                    console.log('deu certo o')
                } 
                else {
                    console.log()
                }
            }
            //caso de errado com requsicao
            catch {
                console.log('error ao fazer a requisicao')
            }
        }
        else {
            //mandando a notificao
            toast.error(authEntryMessages[code!])
            //setando o warn nas entradas
            if (code == 'ERROR_EMAIL_INVALIDO' || code == 'ERROR_EMAIL_VAZIO') {
                SetClassEmail('auth-entrada-warn')
            }
            //senao é a senha que ta toda molestador
            else SetClassSenha('auth-entrada-warn')
        }
    }
 
    //state value das entradas
    const [Email, SetEmail] = useState<string>('')
    const [Senha, SetSenha] = useState<string>('')
    //class state, vai se usada para dispara o warn nas entradas
    const [ClassEmail, SetClassEmail] = useState<ClassWarnEntrada>('')
    const [ClassSenha, SetClassSenha] = useState<ClassWarnEntrada>('')
    //hookService
    const {mtLogin} = useLoginService()

    return {
        //funcao handler click
        ClickLogin,
        Email,
        SetEmail,
        Senha,
        SetSenha,
        //state class
        ClassEmail, 
        SetClassEmail,
        ClassSenha,
        SetClassSenha
    }
}

export default useLogin