import { useQuery } from "@tanstack/react-query"
import type { ParamGetCourseCompleted } from "../../services/service.type"
import { APIGetCourseCompleted } from "../../services/service.aprendizado"

function useGetCourseCompleted({idUser}: ParamGetCourseCompleted) {
    return useQuery({
        queryKey: ["CourseCompleted " + idUser],
        queryFn: () => APIGetCourseCompleted({idUser: idUser})
    })
}

export default useGetCourseCompleted