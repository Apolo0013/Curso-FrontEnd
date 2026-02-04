import Header from "../../../shared/componentes/Header/Header"
import BackDashBoard from "../componentes/BackDashBoard/BackDashBoard"
import ContinuarAprendendo from "../componentes/ContinuarAprendendo/ContinuarAprendendo"
import HeaderDashBoard from "../componentes/HeaderDashBoard.tsx/HeaderDashBoard"
import MainGrid from "../componentes/MainGrid/MainGrid"
import MeuCertificado from "../componentes/MeuCertificado/MeuCertificado"
import MeusCursos from "../componentes/MeusCursos/MeusCursos"

function DashBoardUserPage() {
    return (
        <BackDashBoard>
            <Header />
            <section className="flex flex-col w-[97%] h-auto mt-12">
                <HeaderDashBoard />
                <MainGrid>
                    <ContinuarAprendendo />
                    <MeuCertificado />
                    <MeusCursos/>
                </MainGrid>
            </section>
        </ BackDashBoard>
    )
}

export default DashBoardUserPage