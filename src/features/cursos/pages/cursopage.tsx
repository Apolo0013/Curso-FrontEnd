import BackCurso from "../componentes/BackCurso"
import Cursos from "../componentes/Cursos"
import HeaderCurso from "../componentes/HeaderCurso"

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