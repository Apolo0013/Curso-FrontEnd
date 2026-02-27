import type { CourseContent } from "../../features/dashboard/services/service.types"
import type { OrderClass } from "./type"

export function OrdernarClasses({idCourse, data}: {
    idCourse: string,
    data: CourseContent[] | null
}): OrderClass[] | null {
    //essa funcao retorna uma lista com class orndenadas
    if (data) {
        const listOrderClass: OrderClass[] = []
        let num: number = 1
        const ContentModules = data
            .filter(x => x.idCourse == idCourse)
            .flatMap(x => x.modules)
            .sort((a, b) => a.order - b.order)
        for (const infoM of ContentModules) {
            for (const infoC of infoM.classes.sort((a, b) => a.order - b.order)) {
                listOrderClass.push({ num: num, idClass: infoC.idClass })
                num++
            }
        }
        return listOrderClass
    }
    else return null
    
}