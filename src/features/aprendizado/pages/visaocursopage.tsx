import Header from "../../../shared/componentes/Header/Header";
import { useAuthStore } from "../../../store/auth.store";
import BackAprendizado from "../componentes/BackAprendizado/BackAprendizado";
import HeaderVisaoCurso from "../componentes/HeaderVisaoCurso/HeaderVisaoCurso";
import MainGrid from "../componentes/MainGridVisao/MainGridVisao";
import Modulos from "../componentes/Modulos/Modulos";
import ProgressoGeral from "../componentes/ProgressoGeral/ProgressoGeral";

function VisaoCursoPage() {
    return (
        <BackAprendizado>
            <Header />
            <section className="w-[97%] h-auto flex flex-col mt-10"> 
                <HeaderVisaoCurso />
                <MainGrid>
                    <ProgressoGeral />
                    <Modulos/>
                </MainGrid>
            </section>
        </BackAprendizado>
    )
}
export default VisaoCursoPage