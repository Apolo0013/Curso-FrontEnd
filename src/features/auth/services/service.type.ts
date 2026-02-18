import type {TCodeCommonAuthBackEnd} from '../../../shared/common/auth.common'
//Typagem resposta e parametros do metedos API
export type TCodeResponse = {
    sucesso: boolean,
    code: TCodeCommonAuthBackEnd
}

export type TRegistrarError = null

export type TRegistrarParam = {
    nome: string,
    email: string,
    password: string
}

export type TLoginError = null

export type TLoginParam = {
    email: string,
    password: string
}

export type TMeResponse = {
    response: TUser | 
    TCodeResponse, // ou TRegistrarResponse, tem o mesmo type.
    //porque dele: temos dois tipo de response. vai ajuda a saber que tipo re resposta recebemos.
    resquestSucesso: boolean // se deu certo a requisicao.
}

//Type usuario
type Role = "USER" | "ADMIN" | "GUEST"


export type TUser = {
    id: string,
    role: Role,
    nome: string,
}


