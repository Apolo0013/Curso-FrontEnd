import type {TCodeCommonAuthBackEnd} from '../../../shared/common/auth.common'

//Resposta code, maiorias da rotas retorna:
export type TCodeResponse = {
    sucesso: boolean,
    code: TCodeCommonAuthBackEnd
}

//Resposta, Error e Paramtro do APIRegistrar
/*export type TRegistrarResponse = {
    sucesso: boolean,
    code: TCodeCommonAuthBackEnd
}*/

export type TRegistrarError = null

export type TRegistrarParam = {
    nome: string,
    email: string,
    password: string
}

//Resposta Error e Parametro APILogin
/*export type TLoginResponse = {
    sucesso: boolean,
    code: TCodeCommonAuthBackEnd
}*/

export type TLoginError = null

export type TLoginParam = {
    email: string,
    password: string
}

//Resposta etc APIMe
//User e Admin
export type Role = "USER" | "ADMIN" | "GUEST"

//Usuario em si.
//vai servi como response do APIme
export type TUser = {
    role: Role,
    nome: string,
    id: string
}

export type TMeResponse = {
    response: TUser | 
    TCodeResponse, // ou TRegistrarResponse, tem o mesmo type.
    //porque dele: temos dois tipo de response. vai ajuda a saber que tipo re resposta recebemos.
    resquestSucesso: boolean // se deu certo a requisicao.
}
