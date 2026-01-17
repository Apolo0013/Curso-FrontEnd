import { useMutation } from "@tanstack/react-query"
//Service
import { APIRegistrar } from './auth.service'
//Type
import type {TRegistrarError, TRegistrarParam, TRegistrarResponse } from './service.type'

function useRegistrarService() {
    //mutation
    const mtRegister = useMutation<TRegistrarResponse, TRegistrarError, TRegistrarParam>({
        mutationFn: APIRegistrar
    })

    return {
        mtRegister
    }
}

export default useRegistrarService