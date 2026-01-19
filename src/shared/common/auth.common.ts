//Essa common sao relacionadas ao backend

export const CodeCommonAuthBackEnd = {
    //Sucesso
    CONTA_ENCONTRADA: 'CONTA_ENCONTRADA',
    CONTA_REGISTRADA: 'CONTA_REGISTRADA',
    CONTA_AUTENTICADA_LOGIN: 'CONTA_AUTENTICADA_LOGIN',
    //Error
    ERROR_EMAIL_EM_USO: 'ERROR_EMAIL_EM_USO',
    ERROR_USER_NOFIND: 'ERROR_USER_NOFIND',
    ERROR_NOME_EM_USO: 'ERROR_NOME_EM_USO',
    ERROR_INTERNO_SISTEMA: "ERROR_INTERNO_SISTEMA"
} as const

//tipagem do common
export type TCodeCommonAuthBackEnd = 
    typeof CodeCommonAuthBackEnd[keyof typeof CodeCommonAuthBackEnd]

//Usada nas entradas do registrar e logar.
export const CodeCommonAuthEntry = {
    ERROR_EMAIL_INVALIDO: 'ERROR_EMAIL_INVALIDO',
    ERROR_EMAIL_VAZIO: 'ERROR_EMAIL_VAZIO',
    ERROR_SENHA_VAZIA: 'ERROR_SENHA_VAZIA',
    ERROR_SENHA_CONFIRMAR_VAZIO: 'ERROR_SENHA_CONFIRMAR_VAZIO',
    ERROR_SENHA_NAO_IGUAIS: 'ERROR_SENHA_NAO_IGUAIS',
    ERROR_NOME_CARACTERE_MINIMO: 'ERROR_NOME_CARACTERE_MINIMO',
    ERROR_NOME_CARACTERE_MAXIMO: 'ERROR_NOME_CARACTERE_MAXIMO',
    ERROR_NOME_VAZIO: 'ERROR_NOME_VAZIO',
} as const

export type TCodeCommonAuthEntry =
    typeof CodeCommonAuthEntry[keyof typeof CodeCommonAuthEntry]

