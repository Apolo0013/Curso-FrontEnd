import useGetProgressQuery from "../../aprendizado/hook/useGetProgressQuery"
import useContentQuery from "./useContentQuery"

function useDashBoard() {
    function GetProgressCourse({ idCourse, idUser }: { idCourse: string, idUser: string }): number {
        //pegando o progresso atual do usuario
        const dataProgress = useGetProgressQuery({
            idCourse: idCourse,
            idUser: idUser
        })
        //e o conteudo disponivel
        const dataCourse = useContentQuery({ idUser: "user-001"})
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

    return {
        GetProgressCourse
    }
}

export default useDashBoard