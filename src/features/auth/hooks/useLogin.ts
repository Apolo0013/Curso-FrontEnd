import { useState } from "react"
//type
import type { ClassWarnEntrada, ReturnFNValideEntrada } from './hook.type'
//Notificao
import { toast } from "react-toastify"
//hook
import useActionAuth from "./useActionAuth"
//Service hook
import useLoginService from "./useLoginAuth"
//Mensagem e Common
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
                    password: Senha
                })
                if (sucesso) { // deu certo, usuario existi
                    ///await GetMeAuth()
                } 
                else {
                    //Add warn nas entradas
                    SetClassEmail('auth-entrada-warn')
                    SetClassSenha('auth-entrada-warn')
                    //mandando notificao
                    const msg: string = authMessagesBackEnd[code]
                    toast.error(msg)
                }
            }
            //caso de errado com requsicao
            catch (error) {
                console.log(error)
                toast.warn(authMessagesBackEnd.ERROR_INTERNO_SISTEMA)
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
    const [Email, SetEmail] = useState<string>('apoloniog1945@gmail.com')
    const [Senha, SetSenha] = useState<string>('123')
    //class state, vai se usada para dispara o warn nas entradas
    const [ClassEmail, SetClassEmail] = useState<ClassWarnEntrada>('')
    const [ClassSenha, SetClassSenha] = useState<ClassWarnEntrada>('')
    //hook Service
    const { mtLogin } = useLoginService()
    //hook action
    //const {GetMeAuth} = useActionAuth()


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
        SetClassSenha,
        mtLogin
    }
}

export default useLogin