import { useMutation } from "@tanstack/react-query"
//Service
import { APILogin } from '../services/auth.service'
//type 
import type {TLoginError, TCodeResponse, TLoginParam} from '../services/service.type'

function useLoginService() {
    const mtLogin = useMutation<TCodeResponse, TLoginError, TLoginParam>({
        mutationFn: APILogin,
    })
    return {
        mtLogin
    }
}

export default useLoginService