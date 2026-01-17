//notificao
import { toast } from "react-toastify";
//react
import { useState } from "react"
//type
import type { ReturnFNValideEntrada, ClassWarnEntrada, TuseRegistrar} from "./hook.type"
//Service
import useRegistrarService from "../services/useRegistrarAuth";
//Mensagem E Common
import {authMessagesBackEnd, authEntryMessages} from '../../../shared/mensagem/auth.mensagem'
import { CodeCommonAuth, type TCodeCommonAuth } from "../../../shared/common/auth.common";
//Funcoes valida
import {TrataEntradasRegistrar} from '../valida/valida.registrar'

//obterNamePage.tsx e registrarpage.tsx, compatilhar esse mesmo hook.
function useRegistrar(): TuseRegistrar {
    //funcao handler click para o botao auth do page registrar.tsx
    async function ClickRegister() {
        const {code, sucesso}: ReturnFNValideEntrada  = TrataEntradasRegistrar({
            email: Email, 
            senha: Senha,
            confirmaSenha: ConfirmaSenha,
            nome: Nome
        })
        //caso de tudo certo.
        if (sucesso) {  
            try { 
                //fazendo contato com backend, registrar o usuario
                const {sucesso, code} = await mtRegister.mutateAsync({
                    email: Email,
                    senha: Senha,
                    nome: Nome
                })
                if (sucesso) {
                    console.log('registrado!')
                }
                //mensagem de error
                else {
                    const msg: string = authMessagesBackEnd[CodeCommonAuth[code as keyof TCodeCommonAuth]]
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
    const [Email, SetEmail] = useState<string>('apolonio123@gmail.co') // Email
    const [Senha, SetSenha] = useState<string>('') // Senha
    const [ConfirmaSenha, SetConfirmaSenha] = useState<string>('') // senha novamente ou confirma senha
    
    //State para as class das entradas.
    const [ClassEmail, SetClassEmail] = useState<ClassWarnEntrada>('')
    const [ClassSenha, SetClassSenha] = useState<ClassWarnEntrada>('')
    const [ClassConfirmaSenha, SetClassConfirmaSenha] = useState<ClassWarnEntrada>('')
    //State para obter o nome
    const [Nome, SetNome] = useState<string>("")
    const [ClassNome, SetClassNome] = useState<ClassWarnEntrada>('')
    //Hook Service
    const {mtRegister} = useRegistrarService()

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
        SetClassNome
    }
}

export default useRegistrar

