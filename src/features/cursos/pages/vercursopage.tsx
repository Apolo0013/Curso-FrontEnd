import { useParams } from "react-router-dom"
//Componentes
import BackCurso from "../componentes/BackCurso/BackCurso";
import HeaderCurso from "../componentes/HeaderCurso/HeaderCurso";
import HeaderVerCurso from "../componentes/HeaderVerCurso/HeaderVerCurso";
import SobreCurso from "../componentes/SobreCurso/SobreCurso";
import ComprarCurso from "../componentes/ComprarCurso/ComprarCurso";
import SobreInstrutor from "../componentes/SobreInstrutor/SobreInstrutor";
import { useCourseStore, type Course } from "../../../store/curso.store";

function VerCurso() {
    //ID curso
    const { idCourse } = useParams()
    //Pegando as informacao sobre o curso
    const courseInfo: Course | undefined = useCourseStore((state) => state.Course).find(info => info.id == idCourse)
    return (
        <BackCurso>
            <HeaderCurso />
            <main className="p-4 flex flex-col w-10/12">
                <HeaderVerCurso />
                <div className="w-full grid mt-10 gap-4 grid-cols-[60%_40%] grid-rows-2 hover-outline">
                    <SobreCurso />
                    <ComprarCurso />
                    <SobreInstrutor/>
                </div>
            </main>
        </BackCurso>
    )
}

export default VerCurso