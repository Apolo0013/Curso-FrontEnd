import BackCurso from "../componentes/BackCurso/BackCurso"
import Cursos from "../componentes/Cursos/Cursos"
import HeaderCurso from "../../../shared/componentes/Header/Header"

//Componentes
function CursoPage() {
    return (
        <BackCurso>
            <HeaderCurso />
            <Cursos/>
        </BackCurso>
    )
}

export default CursoPage