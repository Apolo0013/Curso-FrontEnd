import { CodeCommonAuth } from '../common/auth.common'
//essas mensagem sao vinda do "backend"
export const authMessages = {
  // Sucesso
    [CodeCommonAuth.CONTA_ENCONTRADA]: 'Conta encontrada.',
    [CodeCommonAuth.CONTA_REGISTRADA]: 'Conta registrada com sucesso.',
    [CodeCommonAuth.CONTA_AUTENTICADA_LOGIN]: 'Login realizado com sucesso.',

    // Erros
    [CodeCommonAuth.ERROR_EMAIL_EM_USO]: 'Este email já está em uso.',
    [CodeCommonAuth.ERROR_USER_NOFIND]: 'Usuário ou senha inválidos.',
    [CodeCommonAuth.ERROR_NOME_EM_USO]: 'Este nome já está em uso.',
    [CodeCommonAuth.ERROR_INTERNO_SISTEMA]: 'Erro interno do sistema. Tente novamente.',
}
