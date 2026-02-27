//React
import type { ReactNode } from "react";
import { Navigate, useParams } from "react-router-dom";
//Componentes
import Loading from "../../../shared/UI/Loading/Loading";
//Store
import { useAuthStore } from "../../../store/auth.store";
//HOOK query
import useContent from "../../../features/dashboard/hook/queries/useContent";
import useGetAllCoursesPurchased from "../../../shared/hook/queries/useGetAllCoursesPurchased";
import useGetAllCourses from "../../../shared/hook/queries/useGetAllCourses";
//Notificacao
import { toast } from "react-toastify";

function GuardClass({ children }: { children: ReactNode }) {
    //Aqui o so pode entrar:
    // - ele tambem dever ter o curso
    // - ele nao pode acessa aulas que nao existi
    // - se o usuario ja estive com essa aula liberada
    //Parametros da rota
    const { idCourse, idClass } = useParams()
    //idUser. Id do usuario
    const idUser: string = useAuthStore(state => state.user.id)
    //////////////////////////////////////////////////////////////
    //pegando todos os curso comprados
    const {
        data: dataPurchased,
        isLoading: isLoadingPurchased,
    } = useGetAllCoursesPurchased({ idUser })
    //pegando todos os cursos disponivel
    const {
        data: dataAllCourses,
        isLoading: isLoadingAllCourses,
    } = useGetAllCourses()
    //pegando os conteudo do courses
    const {
        data: dataContent,
        isLoading: isLoadingContent,
    } = useContent({ idUser: idUser })
    //////////////////////////////////////////////////////////////
    const havePurchasedCourse: boolean | undefined = dataPurchased && !dataPurchased.data.some(x => x.idCourse == idCourse)
    console.log(havePurchasedCourse)
    const courseExist: boolean | undefined = dataAllCourses && !dataAllCourses.data.some(x => x.id == idCourse)
    const classExists = dataContent?.data &&
        dataContent.data &&
        !dataContent.data
            .flatMap(x => x.modules)
            .flatMap(x => x.classes)
            .some(x => x.idClass == idClass)
    //eles nao devem se undefined
    if (!idCourse || !idClass) return <Navigate to="/dashboard" replace />
    //as requisicao nao devem esta isLoading(ou seja ainda em processo de requisicao)
    if (isLoadingAllCourses || isLoadingPurchased || isLoadingContent) {
        return <Loading />
    }
    //esse curso deve existi
    if (courseExist) {
        toast.warn("O curso informado não foi encontrado.", {autoClose: 3000})
        return <Navigate to="/dashboard" replace />
    }
    //caso o usuario nao tenham "comprado" o este curso
    if (havePurchasedCourse) {
        toast.warn("Você não possui acesso a este curso..", {autoClose: 3000})
        return <Navigate to="/dashboard" replace />
    }
    //o id da class tambem deve se valido
    if (classExists) {
        toast.warn("Essa aula não existe.", {autoClose: 3000})
        return <Navigate to="/dashboard" replace/>
    }

    return children
}

export default GuardClass