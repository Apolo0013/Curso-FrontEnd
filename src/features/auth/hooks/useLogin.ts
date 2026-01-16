import { useState } from "react"
//type
import type {ClassWarnEntrada, ParamTrataEntryLogin, ReturnFNValideEntrada} from './hook.type'
import { toast } from "react-toastify"
//Service
import useLoginService from "../services/useLoginAuth"

function useLogin() {
    async function TrataEntryLogin(data: ParamTrataEntryLogin): Promise<ReturnFNValideEntrada> {
        //valida email
        const regexEmail: RegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
        if (!regexEmail.test(data.email)) {
            SetClassEmail('auth-entrada-warn')
            return {
                sucesso: false,
                msg: 'Informe um endereço de e-mail válido.'
            }
        }
        //se o campo email estive vazio
        else if (data.email.length == 0) {
            SetClassEmail('auth-entrada-warn') // warn na entrada 
            return {
                sucesso: false,
                msg: 'O campo email é obrigatório.'
            }
        }
        else if (data.senha.length == 0) {
            SetClassSenha('auth-entrada-warn')
            return {
                sucesso: false,
                msg: 'O campo senha é obrigatório.'
            }
        }
        else { 
            // aqui ja sabeemos que ta tudo certo com as entradas.
            // vamos fazer contato com backend, e ver ele retorna ok, em questao de autenticado.
            const result = await mtLogin.mutateAsync({
                email: data.email,
                senha: data.senha
            })
            if (result == 'CONTA LOGADA') return {
                sucesso: true,
                msg: ""
            } // deu certo, usuario existi
            else {
                //usuario nao existi
                //add warn nas duas entradas
                SetClassEmail('auth-entrada-warn')
                SetClassSenha('auth-entrada-warn')
                return {
                    sucesso: false,
                    msg: 'Usuário não encontrado.'
                }
            }
        }
    }

    //funcao hancdler clica botao auth, loginpage.tsx
    async function ClickLogin() {
        const {sucesso, msg}: ReturnFNValideEntrada = await TrataEntryLogin({
            email: Email,
            senha: Senha
        })
        //caso as entradas ok:
        if (sucesso) {
            //aqui deu certo, ele foi deve se redirenciona para algum canto.
            alert('usuaario logado\nemail: ' + Email + "\nsenha: " + Senha)
            return
        }
        //senao, que dizer errado, mandando oe error para o usuario.
        else toast.error(msg)
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