import BackCurso from "../componentes/BackCurso/BackCurso"
import Cursos from "../componentes/Cursos/Cursos"
import HeaderCurso from "../componentes/HeaderCurso/HeaderCurso"

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