import type { ReturnFNValideEntrada, ParamTrataEntryLogin } from "../hooks/hook.type"
import { CodeCommonAuthEntry } from "../../../shared/common/auth.common"

export async function TrataEntryLogin(data: ParamTrataEntryLogin): Promise<ReturnFNValideEntrada> {
    //valida email
    const regexEmail: RegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
    if (!regexEmail.test(data.email)) {
        return {
            sucesso: false,
            code: CodeCommonAuthEntry.ERROR_EMAIL_INVALIDO
        }
    }
    //se o campo email estive vazio
    else if (data.email.length == 0) {
        return {
            sucesso: false,
            code: CodeCommonAuthEntry.ERROR_EMAIL_VAZIO
        }
    }
    else if (data.senha.length == 0) {
        return {
            sucesso: false,
            code: CodeCommonAuthEntry.ERROR_SENHA_VAZIA
        }
    }
    else { 
        return {sucesso: true}
    }
}