import { useQuery } from "@tanstack/react-query";
import { APIGetAllCourses } from "../../service/shared.service";

function useGetAllCourses() {
    return useQuery({
        queryKey: ["AllCourses"],
        queryFn: APIGetAllCourses
    })
}

export default useGetAllCourses