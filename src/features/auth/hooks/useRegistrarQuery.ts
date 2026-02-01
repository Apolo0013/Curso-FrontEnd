import { useMutation } from "@tanstack/react-query"
//Service
import { APIRegistrar } from '../services/auth.service'
//Type
import type {TCodeResponse, TRegistrarError, TRegistrarParam, } from '../services/service.type'

function useRegistrarService() {
    //mutation
    const mtRegister = useMutation<TCodeResponse, TRegistrarError, TRegistrarParam>({
        mutationFn: APIRegistrar
    })

    return {
        mtRegister
    }
}

export default useRegistrarService