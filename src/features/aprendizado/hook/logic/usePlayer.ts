import { useNavigate } from "react-router-dom"
//Type
import type { ParamCompletedClass,} from "../../services/service.type"
import type { ParamGetContentPlayer, ContentInfo, ContentInfoList} from "./type"
//Query
import useCompletedQuery from "../queries/useCompletedClass"
import useContent from "../../../dashboard/hook/queries/useContent"
//Store
import { useAuthStore } from "../../../../store/auth.store"
//Utils
import { OrdernarClasses } from "../../../../shared/utils/orderClasses"
import type { OrderClass } from "../../../../shared/utils/type"


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

    //Essa funcao vai retorna o numero da aula atual
    function GetIndividualClassNumber(idCourse: string, idClass: string): string | null {
        const {data} = useContent({ idUser: idUser })
        if (data && data.data && idCourse && idClass) {
            const listOrderClass: OrderClass[] | null = OrdernarClasses({
                idUser: idUser,
                idCourse: idCourse
            })
            if (!listOrderClass) return null
            const OrderClass: OrderClass | undefined = listOrderClass.find(
                x => x.idClass == idClass)
            if (OrderClass) return String(OrderClass.num > 9 ? OrderClass.num : "0" + OrderClass.num)
            else return null
        }
        return null
    }


    const mtCompletedClass = useCompletedQuery()
    //navagar pelar rotas
    const nv = useNavigate()
    //Id do usuario
    const idUser: string = useAuthStore(state => state.user.id)

    return {
        handlerCompletedClass,
        GetContentPlayer,
        GetIndividualClassNumber,
    }
}

export default usePlayer