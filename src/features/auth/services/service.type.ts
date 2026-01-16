//Resposta, Error e Paramtro do APIRegistrar
export type TRegistrarResponse = // vindo do Common
    ''

export type TRegistrarError = null

export type TRegistrarParam = {
    nome: string,
    email: string,
    senha: string
}

//Resposta Error e Parametro APILogin
export type TLoginResponse =
    'USUARIO NAO ENCONTRADO' |
    'CONTA LOGADA'

export type TLoginError = null

export type TLoginParam = {
    email: string,
    senha: string
}