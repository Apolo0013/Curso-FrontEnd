import { useQuery } from "@tanstack/react-query";
//Funcao que faz contato com API
import { APIGetContent } from '../../services/service.dashboard'
import type { ParamGetContent } from "../../services/service.types";

//esse hook vai fazer a requisicao do conteudo do cursos
function useContent({idUser}: ParamGetContent) {
    return useQuery({
        queryKey: ["contentCourse"],
        queryFn: () => APIGetContent({idUser: idUser})
    })
}

export default useContent