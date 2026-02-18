import { useMutation } from "@tanstack/react-query";
import type { ParamCompletedClass, ResponseCompletedClass } from "../services/service.type";
import { APICompletedClass } from "../services/service.aprendizado";

function useCompletedQuery() {
    return useMutation<
        ResponseCompletedClass,
        unknown,
        ParamCompletedClass
        >({ mutationFn: APICompletedClass })
}

export default useCompletedQuery