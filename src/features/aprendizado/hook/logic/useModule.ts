import { OrdernarClasses } from "../../../../shared/utils/orderClasses"
import type { OrderClass } from "../../../../shared/utils/type"
import { useAuthStore } from "../../../../store/auth.store"
import useGetCourseCompleted from "../queries/useGetCourseCompleted"
import useGetProgress from "../queries/useGetProgress"

function useModule() {
    function IsCourseCompletd(idCourse: string): boolean {
        const {data} = useGetCourseCompleted({ idUser: idUser })
        //Se este curso ja estive completo. Todas as aulas ja estaram completo, entao todas estaram "concluida"
        if (data && data.data) return data.data.some(x => x.idCourse == idCourse)
        else return false
    }   

    function ThisClassCompleted({ idClass, idCourse }: { idClass: string, idCourse: string }) {
        //Essa aula esta completa?
        //*Quando o curso estive completo tudo esta concluido.
        const { data } = useGetProgress({ idUser: idUser, idCourse: idCourse})
        //curso esta completo?
        if (IsCourseCompletd(idCourse)) return true
        else if (
            data && data.data && idClass && idCourse
        ) {
            //as classes/aulas ordenadas
            const OrderClass: OrderClass[] | null = OrdernarClasses({
                idCourse: idCourse,
                idUser: idUser
            })
            
            if (data.data.some(x => x.idClass == idClass) && OrderClass) {
                const classesCompleted: OrderClass[] = OrderClass.filter(x => data.data
                    .some(y => y.idClass == x.idClass
                ))
                return !(classesCompleted[classesCompleted.length - 1].idClass == idClass)
            }
            return false
        }
        else return false
    }

    //IdUser
    const idUser = useAuthStore(state => state.user.id)

    return {
        ThisClassCompleted
    }
}

export default useModule