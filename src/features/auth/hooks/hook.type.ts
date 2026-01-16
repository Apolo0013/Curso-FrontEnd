//retorno e parametro da funcao TrataEntradasRegistrar useRegistrar.tsx
export type ParamEntryRegister = {
        email: string,
        senha: string, 
        confirmaSenha: string,
    }
//type da funcao TrataEntrylLogin 
export type ParamTrataEntryLogin = {
    email: string,
    senha: string
}
//return das funcao que vai valida
export type ReturnFNValideEntrada = {
    sucesso: boolean,
    msg: string
}
//Class warn
export type ClassWarnEntrada = '' | 'auth-entrada-warn'