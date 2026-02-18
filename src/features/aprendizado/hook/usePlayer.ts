import { useNavigate } from "react-router-dom"
import type { ParamCompletedClass,} from "../services/service.type"
import type { ParamGetContentPlayer, ContentInfo, ContentInfoList} from "./type"
//Query
import useCompletedQuery from "./useCompletedClassQuery"


function usePlayer() {
    async function handlerCompletedClass(body: ParamCompletedClass) {
        await mtCompletedClass.mutateAsync(body)
        console.log()
        nv(`/dashboard/${body.idCourse}`)
    }

    function GetContentPlayer({data, idClass}: ParamGetContentPlayer): ContentInfo | null {
        //pegando os modulos com id e classes
        const modules: ContentInfoList = data
            .flatMap(x => x.modules)
            .map(x => ({ classes: x.classes, idModule: x.idModule }))
        console.log(data)
        //procurando a class
        console.log(modules)
        const contentInfo = modules
            .map((x): ContentInfo => {
                const contentTemp = x.classes.find(x => x.idClass == idClass) ?? null
                return {classes: contentTemp, idModule: x.idModule}
            })
                
        if (contentInfo.some(x => x.classes)) {
            const data: ContentInfo | null = contentInfo
                .filter(x => x.classes)
                .find(x => x.classes!.idClass == idClass) ?? null
            if (data && data.classes && data.idModule) {
                return data
            }
            return null   
        }
        return null
    }

    const mtCompletedClass = useCompletedQuery()
    //navagar pelar rotas
    const nv = useNavigate()

    return {
        handlerCompletedClass,
        GetContentPlayer
    }
}

export default usePlayer