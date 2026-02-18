import { useQuery } from "@tanstack/react-query";
import type { ParamGetProgress } from "../services/service.type";
import { APIGetProgress } from "../services/service.aprendizado";

function useGetProgressQuery({idCourse, idUser}: ParamGetProgress) {
    return useQuery({
        queryKey: ["progress " + idCourse],
        queryFn: () => APIGetProgress({idCourse: idCourse, idUser: idUser})
    })
}

export default useGetProgressQuery

//http://localhost:5182/course/get/progress?idCourse=course-react-01&idUser=user-001