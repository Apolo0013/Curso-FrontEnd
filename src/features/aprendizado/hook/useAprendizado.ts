import type { ClassesProgres } from "../services/service.type"
import type { ParamIsAvaliable } from "./type"
import useGetProgressQuery from "./useGetProgressQuery"

function useIsAvailable({ idCourse, idUser, idClass }: ParamIsAvaliable): boolean {
    const {data} = useGetProgressQuery({idCourse: idCourse, idUser: idUser})
    const dataProgress: ClassesProgres[] | null = data && data.data ? data.data : null
    if (!dataProgress) return false // caso seja null o retorno da API
    else return dataProgress?.some(x => x.idClass == idClass)
}

export default useIsAvailable