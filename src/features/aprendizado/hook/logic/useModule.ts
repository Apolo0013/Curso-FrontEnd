import { OrdernarClasses } from "../../../../shared/utils/orderClasses"
import type { OrderClass } from "../../../../shared/utils/type"
import { useAuthStore } from "../../../../store/auth.store"
import useContent from "../../../dashboard/hook/queries/useContent"
import useGetCourseCompleted from "../queries/useGetCourseCompleted"
import type { ParamThisClassCompleted } from "./type"

function useModule() {
    function IsCourseCompletd(idCourse: string): boolean {
        //Se este curso ja estive completo. Todas as aulas ja estaram completo, entao todas estaram "concluida"
        const {data} = CourseCompleted
        if (data && data.data) return data.data.some(x => x.idCourse == idCourse)
        else return false
    }   

    function ThisClassCompleted({ idClass, idCourse, ClasseProgress }: ParamThisClassCompleted) {
        //Essa aula esta completa?
        //*Quando o curso estive completo tudo esta concluido.
        if (!ClasseProgress) return false
        else if (ClasseProgress.length == 1) return false
        else if (!idCourse) return false
        else if (IsCourseCompletd(idCourse)) return true
        else if (
            ClasseProgress && idClass && idCourse
        ) {
            //Pegando o conteudo do curso
            const { data } = ContentCourses
            if (!data) return false
            //as classes/aulas ordenadas
            const OrderClass: OrderClass[] | null = OrdernarClasses({
                idCourse: idCourse,
                data: data.data 
            })
            if (ClasseProgress.some(x => x.idClass == idClass) && OrderClass) {
                const classesCompleted: OrderClass[] = OrderClass.filter(x => ClasseProgress
                    .some(y => y.idClass == x.idClass))
                if (classesCompleted.length <= 0) return false
                return !(classesCompleted[classesCompleted.length - 1].idClass == idClass)
            }
            return false
        }
        else return false
    }

    //IdUser
    const idUser = useAuthStore(state => state.user.id)
    //Cursos completos, pegando via requisicao
    const CourseCompleted = useGetCourseCompleted({ idUser: idUser })
    //Conteudo do curso
    const ContentCourses = useContent({idUser: idUser})

    return {
        ThisClassCompleted
    }
}

export default useModule