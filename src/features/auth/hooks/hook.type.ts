//retorno e parametro da funcao TrataEntradas useRegistrar.tsx
export type Paramentry = {
        email: string,
        senha: string, 
        confirmaSenha: string,
    }
export type Returnentry =
        "invalidoEmail"
    | "senhaNaoIguais"
    | "sucesso"
    | "senhaVazia"
    | "senhaConfirmaVazia"

//
export type ClassWarnEntrada = '' | 'auth-entrada-warn'