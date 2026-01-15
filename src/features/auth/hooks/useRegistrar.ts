//notificao
import { toast } from "react-toastify";
//react
import { useState } from "react"
import { useNavigate } from "react-router-dom"
//type
import type {Paramentry, Returnentry, ClassWarnEntrada} from "./hook.type"

//obterNamePage.tsx e registrarpage.tsx, compatilhar esse mesmo hook.
function useRegistrar() {
    function TrataEntradas(entry: Paramentry): Returnentry {
        //regex do email
        const regexEmail: RegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
        //Verificando o email
        if (entry.email.length == 0 || !regexEmail.test(entry.email)) {
            SetClassEmail('auth-entrada-warn') // error na entrada / UI
            return 'invalidoEmail'
        }
            //quando senha estive vazia
        else if (entry.senha.length == 0) {
            SetClassSenha('auth-entrada-warn')
            return 'senhaVazia'
        }
        else if (entry.confirmaSenha.length == 0) { 
            SetClassConfirmaSenha('auth-entrada-warn')
            return 'senhaConfirmaVazia'
        }
        //quando as senha nao sao igual
        else if (entry.confirmaSenha != entry.senha) {
            //add warn nas duas entradas
            SetClassSenha('auth-entrada-warn')
            SetClassConfirmaSenha('auth-entrada-warn')
            return 'senhaNaoIguais'
        }
        //deu certo
        else return 'sucesso'
    }

    //funcao handler click para o botao auth do page registrar.tsx
    function ClickRegister() {
        const result: Returnentry = TrataEntradas({
            email: Email, 
            senha: Senha,
            confirmaSenha: ConfirmaSenha
        })
        console.log(result)
        //caso de tudo certo.
        if (result == 'sucesso') {
            nv('/auth/obternome', {
                state: { isRegister: true }
            })
            return
        }
        //notifica ao usuario o resultado ao aperta o botao(error)
        let msgNoti: string = ""
        switch (result) {
            case "invalidoEmail":
                msgNoti = "Informe um endereço de e-mail válido."
                break

            case "senhaConfirmaVazia":
                msgNoti = "Confirme a senha para continuar."
                break

            case "senhaNaoIguais":
                msgNoti = "As senhas informadas não coincidem."
                break

            case "senhaVazia":
                msgNoti = "O campo senha é obrigatório."
                break
            }
        toast.error(msgNoti) // notificacao de error.
    }

    //funcao handler click para o botao auth do page obternome.tsx
    function ClickObterNome() {
        //verificacao rapida no nome.
        // nao pode esta vazio
        // minimo 10 caracatere
        // maximo 30 caractere
        const lenname = Nome.length // o tamanhho do Nome.
        let msgNoti: string = "" // vai guardar a messagem 
        let error: boolean = true // responsavel por fala se deu error ou nao
        //vazio
        if (lenname == 0) {    
            msgNoti = "O nome é obrigatório."
        }
        //menor do que 10
        else if (lenname < 10) {
            msgNoti = "O nome deve ter no mínimo 10 caracteres."   
        }
        //mairo do que 30
        else if (lenname > 30) {
            msgNoti = "O nome deve ter no máximo 30 caracteres."
        }
        //deu certo
        else error = false // nao deu error.

        //mensagem obtida
        if (!error) {
            console.log('deu certo.')
        }
        //mandando msg de error
        else {
            SetClassNome('auth-entrada-warn') // mandando warn na entrada
            toast.error(msgNoti) // mandando notificacao
        }
    }


    const nv = useNavigate()

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

    return {
        ClickObterNome,
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

