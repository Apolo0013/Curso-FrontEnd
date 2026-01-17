import { CodeCommonAuth, CodeCommonAuthEntry } from '../common/auth.common'
//essas mensagem sao vinda do "backend"
export const authMessagesBackEnd = {
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
//Mensagem relacionado ao front usada no useLogin e useRegistrar
export const authEntryMessages: Record<
  keyof typeof CodeCommonAuthEntry,
  string
> = {
    ERROR_EMAIL_INVALIDO: 'Informe um endereço de e-mail válido.',
    ERROR_EMAIL_VAZIO: 'O campo e-mail é obrigatório.',
    ERROR_SENHA_VAZIA: 'O campo senha é obrigatório.',
    ERROR_SENHA_CONFIRMAR_VAZIO: 'Confirme a senha para continuar.',
    ERROR_SENHA_NAO_IGUAIS: 'As senhas informadas não coincidem.',
    ERROR_NOME_CARACTERE_MINIMO: 'O nome deve ter no mínimo 10 caracteres.',
    ERROR_NOME_CARACTERE_MAXIMO: 'O nome deve ter no máximo 30 caracteres.',
    ERROR_NOME_VAZIO: 'O nome é obrigatório.',
}
