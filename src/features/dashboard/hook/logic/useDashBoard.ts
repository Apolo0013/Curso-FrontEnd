import { OrdernarClasses } from "../../../../shared/utils/orderClasses"
import type { OrderClass } from "../../../../shared/utils/type"
import { useAuthStore } from "../../../../store/auth.store"
import useGetProgress from "../../../aprendizado/hook/queries/useGetProgress"
import type { ClassesProgres } from "../../../aprendizado/services/service.type"
import type { Classes } from "../../services/service.types"
import useContent from "../queries/useContent"
import type { ReturnCurrentClass } from "./type"

function useDashBoard() {
    function GetProgressCourse(idCourse: string): number {
        //pegando o progresso atual do usuario
        const dataProgress = useGetProgress({
            idCourse: idCourse,
            idUser: idUser
        })
        //e o conteudo disponivel
        const dataCourse = useContent({ idUser: "user-001"})
        if (dataCourse.data && dataProgress.data && dataCourse.data.data && dataProgress.data.data) {
            //total de aulas que o curso tem
            const totalClasses: number = dataCourse.data.data
                .filter(x => x.idCourse == idCourse)
                .flatMap(x => x.modules)
                .flatMap(x => x.classes)
                .length
            //aulas ja feita
            const doneClasses: number = dataProgress.data.data.length
            return (doneClasses * 100) / totalClasses
        }
        return 0
    }

    //Essa funcao so vai servi aqui.
    function GetTitleClass(idClass: string): string | null {
        const { data } = useContent({ idUser: idUser })
        if (data && data.data) {
            const classes: Classes[] = data.data
                .flatMap(x => x.modules)
                .flatMap(x => x.classes)
            const classe: Classes | undefined = classes.find(x => x.idClass == idClass)
            if (!classe) return null
            return classe.title
        }
        return null
    }

    function CurrentClass(idCourse: string): ReturnCurrentClass | null {
        //Essa funcao vai retorna duas coisas
        // - NumberClass: Numerecao da aula
        // - NameClass: Nome da aula
        //Pegando as aulas ja completas
        const { data } = useGetProgress({ idCourse: idCourse, idUser: idUser })
        //Ordernandos as aulas por numeros
        const OrderClass: OrderClass[] | null = OrdernarClasses({
            idCourse: idCourse,
            idUser: idUser
        })
        if (OrderClass && data && data.data) {
            //Pegando a ultima aula/class completa
            const classe: ClassesProgres = data.data[data.data.length - 1]
            //procurando ele no orderclass, para pegar a order numerica
            const classOrder: OrderClass | undefined = OrderClass.find(x => x.idClass == classe.idClass)
            //caso classOrder seja null
            if (!classOrder) return null
            //Titulo/Title da aula atual
            const titleClass: string | null = GetTitleClass(classOrder.idClass)
            //caso a funcao GetTitleClass retorno null
            if (!titleClass) return null
            return {
                NameClass: titleClass,
                NumberClass: classOrder.num > 9
                    ? String(classOrder.num)
                    : '0' + classOrder.num
            }
        }
        return null
    }

    //id do usuario
    const idUser = useAuthStore(state => state.user.id)

    return {
        GetProgressCourse,
        CurrentClass
    }
}

export default useDashBoard