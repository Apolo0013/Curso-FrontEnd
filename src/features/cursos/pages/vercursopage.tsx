//Componentes
import BackCurso from "../componentes/BackCurso/BackCurso";
import Header from "../../../shared/componentes/Header/Header";
import HeaderVerCurso from "../componentes/HeaderVerCurso/HeaderVerCurso";
import SobreCurso from "../componentes/SobreCurso/SobreCurso";
import ComprarCurso from "../componentes/ComprarCurso/ComprarCurso";
import SobreInstrutor from "../componentes/SobreInstrutor/SobreInstrutor";


function VerCurso() {
    return (
        <BackCurso>
            <Header />
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