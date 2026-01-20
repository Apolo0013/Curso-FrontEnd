//notificao
import { toast } from "react-toastify";
//react
import { useState } from "react"
//type
import type { ReturnFNValideEntrada, ClassWarnEntrada } from "./hook.type"
//Service
import useRegistrarService from "./useRegistrarAuth";
//Mensagem E Common
import {authMessagesBackEnd, authEntryMessages} from '../../../shared/mensagem/auth.mensagem'
//Funcoes valida
import {TrataEntradasRegistrar} from '../valida/valida.registrar'
import useActionAuth from "./useActionAuth";

//obterNamePage.tsx e registrarpage.tsx, compatilhar esse mesmo hook.
function useRegistrar() {
    //funcao handler click para o botao auth do page registrar.tsx
    async function ClickRegister() {
        const {code, sucesso}: ReturnFNValideEntrada  = TrataEntradasRegistrar({
            email: Email, 
            senha: Senha,
            confirmaSenha: ConfirmaSenha,
            nome: Nome
        })
        console.log(code)
        //caso de tudo certo.
        if (sucesso) {  
            try { 
                //fazendo contato com backend, registrar o usuario
                const {sucesso, code} = await mtRegister.mutateAsync({
                    email: Email,
                    password: Senha,
                    nome: Nome
                })
                if (sucesso) {
                    //await GetMeAuth()
                }
                //mensagem de error
                else {
                    const msg: string = authMessagesBackEnd[code]
                    toast.error(msg)
                }
            }
            catch { // é chamado quando algo de errado na requisicao
                const msg: string = authMessagesBackEnd.ERROR_INTERNO_SISTEMA
                toast.warn(msg)
            }
        }
        //senao vai manda um error pro user 
        else {
            //mandando notificao
            toast.error(authEntryMessages[code!])
            //ativando warn nas entradas
            switch (code) {
                case 'ERROR_EMAIL_INVALIDO':
                    SetClassEmail('auth-entrada-warn')
                    break
                case 'ERROR_EMAIL_VAZIO':
                    SetClassEmail('auth-entrada-warn')
                    break
                case 'ERROR_NOME_CARACTERE_MAXIMO':
                    SetClassNome('auth-entrada-warn')
                    break
                case 'ERROR_NOME_CARACTERE_MINIMO':
                    SetClassNome('auth-entrada-warn')
                    break
                case 'ERROR_NOME_VAZIO':
                    SetClassNome('auth-entrada-warn')
                    break
                case 'ERROR_SENHA_CONFIRMAR_VAZIO':
                    SetClassConfirmaSenha('auth-entrada-warn')
                    break
                case 'ERROR_SENHA_NAO_IGUAIS':
                    SetClassSenha('auth-entrada-warn')
                    SetClassConfirmaSenha('auth-entrada-warn')
                    break
                case 'ERROR_SENHA_VAZIA':
                    SetClassSenha('auth-entrada-warn')
                    break
            }
        }
    }

    //Valores dos input do componentes Entrada.tsx
    const [Email, SetEmail] = useState<string>('apo232onhio123@gmail.com') // Email
    const [Senha, SetSenha] = useState<string>('123') // Senha
    const [ConfirmaSenha, SetConfirmaSenha] = useState<string>('123') // senha novamente ou confirma senha
    
    //State para as class das entradas.
    const [ClassEmail, SetClassEmail] = useState<ClassWarnEntrada>('')
    const [ClassSenha, SetClassSenha] = useState<ClassWarnEntrada>('')
    const [ClassConfirmaSenha, SetClassConfirmaSenha] = useState<ClassWarnEntrada>('')
    //State para obter o nome
    const [Nome, SetNome] = useState<string>("apolonho231312312")
    const [ClassNome, SetClassNome] = useState<ClassWarnEntrada>('')
    //Hook Service
    const { mtRegister } = useRegistrarService()
    //Hook Action
    //const { GetMeAuth } = useActionAuth()

    return {
        ClickRegister,
        SetEmail,
        SetSenha,
        SetConfirmaSenha,
        SetNome,
        //esse set e state vao diretamente para as entradas
        ClassEmail,
        SetClassEmail,
        ClassSenha,
        SetClassSenha,
        ClassConfirmaSenha,
        SetClassConfirmaSenha,
        ClassNome,
        SetClassNome,
        //Service
        mtRegister
    }
}

export default useRegistrar

