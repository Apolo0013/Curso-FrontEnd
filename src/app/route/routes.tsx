import { Route, Routes } from 'react-router-dom'
//Paginas
import LoginPage from '../../features/auth/pages/loginpage'
import RegistrarPage from '../../features/auth/pages/registrarpage'
import CursoPage from "../../features/cursos/pages/cursopage";
import VerCursoPage from "../../features/cursos/pages/vercursopage";
import CarrinhoPage from "../../features/cursos/pages/carrinhopage";
import DashBoardUserPage from "../../features/dashboard/pages/dashboarduserpage";
import VisaoCursoPage from "../../features/aprendizado/pages/visaocursopage";
import PlayerCursoPage from "../../features/aprendizado/pages/playercursopage";

//Protecao das rotas
import GuardUser from "./ProtectedRoutes/Guard.User";
import GuardGuest from "./ProtectedRoutes/Guard.Guest";
import GuardCourse from './ProtectedRoutes/Guard.Course';
import GuardClass from './ProtectedRoutes/Guard.Class';

function RoutesMain() {
    return (
        <>
            <Routes>
                {/*Rotas AUTH*/}
                <Route path='/auth/login' element={
                    <GuardGuest>
                        <LoginPage />
                    </GuardGuest>
                }></Route>
                <Route path='/auth/cadastro' element={
                    <GuardGuest>
                        <RegistrarPage />
                    </GuardGuest>
                }></Route>
                {/*Rotas Cursos*/}
                <Route path="/cursos" element={
                    <GuardUser>
                        <CursoPage />
                    </GuardUser>
                } />
                <Route path='/cursos/ver/:idCourse' element={<VerCursoPage />} />
                {/*Carrinho*/}
                <Route path='/cursos/carrinho' element={<CarrinhoPage />} />
                {/*Rota DashBoard*/}
                <Route path='/dashboard' element={
                    <GuardUser>
                        <DashBoardUserPage />
                    </GuardUser>
                } />
                {/*rotas aprendizado*/}
                <Route path='/dashboard/:idCourse' element={
                    <GuardUser>
                        <GuardCourse>
                            <VisaoCursoPage />
                        </GuardCourse>
                    </GuardUser>
                } />
                <Route path='/dashboard/:idCourse/aula/:idClass' element={
                    <GuardUser>
                        <GuardClass>
                            <PlayerCursoPage />
                        </GuardClass>
                    </GuardUser>
                } />
            </Routes>
        </>)
}

export default RoutesMain