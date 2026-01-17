import type { ReturnFNValideEntrada, ParamEntryRegister } from "../hooks/hook.type"
import {CodeCommonAuthEntry} from '../../../shared/common/auth.common'

export function TrataEntradasRegistrar(entry: ParamEntryRegister): ReturnFNValideEntrada  {
        //largura do nome
        const lenName: number = entry.nome.length
        //regex do email
        const regexEmail: RegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
        //Verificando o email, valido email
        if (!regexEmail.test(entry.email)) {
            return {
                sucesso: false,
                code: CodeCommonAuthEntry.ERROR_EMAIL_INVALIDO,
            }
        }
        //Email vazio
        if (entry.email.length == 0) {
            return {
                sucesso: false,
                code: CodeCommonAuthEntry.ERROR_EMAIL_VAZIO
            }
        }
        //quando senha estive vazia
        else if (entry.senha.length == 0) {
            return {
                sucesso: false,
                code: CodeCommonAuthEntry.ERROR_SENHA_VAZIA
            }
        }
        //caso senha confirme estive vazio
        else if (entry.confirmaSenha.length == 0) { 
            return {
                sucesso: false,
                code: CodeCommonAuthEntry.ERROR_SENHA_CONFIRMAR_VAZIO
            }
        }
        //quando as senha nao sao igual
        else if (entry.confirmaSenha != entry.senha) {
            return {
                sucesso: false,
                code: CodeCommonAuthEntry.ERROR_SENHA_NAO_IGUAIS
            }
        }
            //Nome
            //vazio
        else if (lenName == 0) {
            return {
                sucesso: false,
                code: CodeCommonAuthEntry.ERROR_NOME_VAZIO
            }
        }
        //menor do que 10
        else if (lenName < 10) {
            return {
                sucesso: false,
                code: CodeCommonAuthEntry.ERROR_NOME_CARACTERE_MINIMO
            }
        }
        //mairo do que 30
        else if (lenName > 30) {
            return {
                sucesso: false,
                code: CodeCommonAuthEntry.ERROR_NOME_CARACTERE_MAXIMO
            }
        }
        //deu certo
        else return {
            sucesso: true,
        }
    }