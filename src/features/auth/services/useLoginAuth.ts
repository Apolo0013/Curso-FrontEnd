import { useMutation } from "@tanstack/react-query"
//Service
import { APILogin } from './auth.service'
//type 
import type {TLoginError, TLoginResponse, TLoginParam} from './service.type'

function useLoginService() {
    const mtLogin = useMutation<TLoginResponse, TLoginError, TLoginParam>({
        mutationFn: APILogin
    })
    return {
        mtLogin
    }
}

export default useLoginService