//Resposta, Error e Paramtro do APIRegistrar
export type TRegistrarResponse = {
    sucesso: boolean,
    code: string
}

export type TRegistrarError = null

export type TRegistrarParam = {
    nome: string,
    email: string,
    senha: string
}

//Resposta Error e Parametro APILogin
export type TLoginResponse = {
    sucesso: boolean,
    code: string
}

export type TLoginError = null

export type TLoginParam = {
    email: string,
    senha: string
}