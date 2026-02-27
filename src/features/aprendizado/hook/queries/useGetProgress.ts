import { useQuery } from "@tanstack/react-query";
import type { ParamGetClassProgress } from "../../services/service.type";
import { APIGetClassProgress } from "../../services/service.aprendizado";

function useGetProgress({idCourse, idUser}: ParamGetClassProgress) {
    return useQuery({
        queryKey: ["progress " + idCourse],
        queryFn: () => APIGetClassProgress({idCourse: idCourse, idUser: idUser})
    })
}

export default useGetProgress

//http://localhost:5182/course/get/progress?idCourse=course-react-01&idUser=user-001