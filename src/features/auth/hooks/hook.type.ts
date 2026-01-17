import type { Dispatch, SetStateAction } from "react"
import { type TCodeCommonAuthEntry } from '../../../shared/common/auth.common'

//retorno e parametro da funcao TrataEntradasRegistrar useRegistrar.tsx
export type ParamEntryRegister = {
    email: string,
    senha: string, 
    confirmaSenha: string,
    nome: string
}
//type da funcao TrataEntrylLogin 
export type ParamTrataEntryLogin = {
    email: string,
    senha: string
}

//return das funcao que vai valida
export type ReturnFNValideEntrada = {
    sucesso: boolean,
    code?: TCodeCommonAuthEntry
}
//Class warn
export type ClassWarnEntrada = '' | 'auth-entrada-warn'
// !=================================================================
//retorno dos HOOK
type SetString = Dispatch<SetStateAction<string>> // SetState string
type SetWarnClass = Dispatch<SetStateAction<ClassWarnEntrada>> // SetState WarnClassEntrada
export type TuseRegistrar = {
    ClickRegister: () => void,
    SetEmail: SetString,
    SetSenha: SetString,
    SetConfirmaSenha: SetString,
    SetNome: SetString,
    ClassEmail: ClassWarnEntrada,
    SetClassEmail: SetWarnClass,
    ClassSenha: ClassWarnEntrada,
    SetClassSenha: SetWarnClass,
    ClassConfirmaSenha: ClassWarnEntrada,
    SetClassConfirmaSenha: SetWarnClass,
    ClassNome: ClassWarnEntrada,
    SetClassNome: SetWarnClass
}