import type { ReactNode } from "react"
//Nagavigate
import { Navigate, useParams } from "react-router-dom"
import useGetAllCoursesPurchased from "../../../shared/hook/queries/useGetAllCoursesPurchased"
import { useAuthStore } from "../../../store/auth.store"
//Componentes
import Loading from "../../../shared/UI/Loading/Loading"
import useGetAllCourses from "../../../shared/hook/queries/useGetAllCourses"
//Usando especialmente
// -> /dashboard/:idCourse
// -> /dashboard/:idCourse/aula/:idClass

//*Importante lembra: Aqui so deve se chamado com protecao User
function GuardCourse({ children }: { children: ReactNode }) {
    //Essa quem acessa so quem tem o curso
    // - Curso que nao existi nao entrar aqui
    // - Se o curso existi, vamos verificar se o usuario tem ele comprado ou nao.
    //id do Usuario
    const idUser = useAuthStore(state => state.user.id)
    //id do curso que ele esta querendo acessa
    const { idCourse } = useParams()
    //Requisicao
    //Vamos pegar os cursos que o usuario contem
    const GetAllCoursesPurchased = useGetAllCoursesPurchased({ idUser })
    const AllCourses = useGetAllCourses()
    console.log(!AllCourses.isLoading ? AllCourses.data : "nadanp" )
    //--
    if (!idCourse)
    {
        alert("Faltar do id pae")
        return <Navigate to="/dashboard" />
    }
    if (GetAllCoursesPurchased.isError) {
        alert("Error na requisicao")
        return <Navigate to="/dashboard" />
    }   
    if (GetAllCoursesPurchased.isLoading) {
        alert("carragando")
        return <Loading/>
    }
    //se o id do curso que ele nois forneceu nao exisi
    if (AllCourses.data && !AllCourses.data.data.some(x => x.id == idCourse)) {
        alert("Nao existi pae")
        return <Navigate to="/dashboard"/>
    }
    if (GetAllCoursesPurchased.data && !GetAllCoursesPurchased.data.data.some(x => x.idCourse == idCourse)) {
        alert("o usuario nao contem esse curso")
        return <Navigate to="/dashboard" />
    }
    else
        return children
}

export default GuardCourse

