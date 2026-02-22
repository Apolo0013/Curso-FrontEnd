import { useQuery } from "@tanstack/react-query";
//API
import { APIGetCourseByID } from "../../services/service.dashboard";

function useGetCourseByID({ idCourse, keyQuery }: {idCourse: string, keyQuery: string}) {
    return useQuery({
        queryKey: [keyQuery],
        queryFn: () => APIGetCourseByID({idCourse: idCourse})
    })
}

export default useGetCourseByID