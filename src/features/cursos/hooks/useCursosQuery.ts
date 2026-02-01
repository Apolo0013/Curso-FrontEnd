import { useQuery } from "@tanstack/react-query";
//Service 
import { APIGetAllCourse } from '../services/course.service'

function useCursosQuery() {    
    return useQuery({
        queryKey: ["GetAll"],
        queryFn: APIGetAllCourse,
    })
}

export default useCursosQuery