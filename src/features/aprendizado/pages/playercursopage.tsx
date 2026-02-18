//Componentes
import Header from "../../../shared/componentes/Header/Header"
import BackAprendizado from "../componentes/BackAprendizado/BackAprendizado"
import MenuAulas from "../componentes/MenuAulas/MenuAulas"
import Player from "../componentes/Player/Player"
//HOOK
import { useParams } from "react-router-dom";
import { useAuthStore } from "../../../store/auth.store";
import useContentQuery from "../../dashboard/hook/useContentQuery";
//Type
import type { Classes } from "../../dashboard/services/service.types";

function PlayerCursoPage() {
    //id do usuario
    const idUser = useAuthStore(state => state.user.id)
    //id curso/course
    const { idCourse } = useParams()
    const { data } = useContentQuery({ idUser: idUser })
    let classes: Classes[] | null = null
    if (data && data.data) {
        const ModuleFind = data.data
            .filter(x => x.idCourse == idCourse)
            .flatMap(x => x.modules)
            .find(x => x.idModule)
        const idModule: string | null = ModuleFind!.idModule ?? null
        classes = data.data
            .filter(x => x.idCourse == idCourse)
            .flatMap(x => x.modules)
            .filter(x => x.idModule == idModule)
            .flatMap(x => x.classes)
    }
    return (
        <BackAprendizado>
            <Header />
            <main className="w-full h-full grid grid-cols-[6.3fr_2.7fr] grid-rows-1">
                <Player />
                <MenuAulas aulas={classes ? classes : []} />
            </main>
        </BackAprendizado>
    )
}

export default PlayerCursoPage