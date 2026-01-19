import { useQuery } from "@tanstack/react-query";
//Service
import {APIMe} from '../services/auth.service'

function GetMeAuth() {
    const query = useQuery({
        queryKey: ["me"],
        queryFn: APIMe,
        enabled: true
    })
    return query
}

export default GetMeAuth