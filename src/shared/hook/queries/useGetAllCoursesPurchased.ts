//ReactQuery
import { useQuery } from "@tanstack/react-query";
//Type
import type { ParamGetAllCoursesPurchased } from "../../service/service.type";
//Funcao API
import { APIGetAllCoursesPurchased } from "../../service/shared.service";

function useGetAllCoursesPurchased({idUser}: ParamGetAllCoursesPurchased) {
    return useQuery({
        queryKey: ["GetAllCourses " + idUser],
        queryFn: () => APIGetAllCoursesPurchased({idUser})
    })
}

export default useGetAllCoursesPurchased