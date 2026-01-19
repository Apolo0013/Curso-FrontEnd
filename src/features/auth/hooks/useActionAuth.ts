//type
import type { TCodeResponse, TUser } from "../services/service.type"
//service
import useGetMe from '../hooks/useMeAuth'
//notificao
import { toast } from "react-toastify"
//Mensagens
import { authMessagesBackEnd } from "../../../shared/mensagem/auth.mensagem"


function useActionAuth() {
    //Chamado quando a auth com usuario de Certo.
    async function GetMeAuth() {
        await meQuery.refetch()
        const dataRes = meQuery.data // pegando o retorno
        // se for status == 200
        if (!meQuery.isError && dataRes!.resquestSucesso) {
            const data = dataRes!.response as TUser
            console.log(data)
        }
        // senao for diferente de 200
        else {
            //tipando a resposta
            const data = dataRes?.response as TCodeResponse
            toast.error(authMessagesBackEnd[data.code]) // mandando notificao
        }
    }
    const meQuery = useGetMe()

    return {
        GetMeAuth
    }
}

export default useActionAuth