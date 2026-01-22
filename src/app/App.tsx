//Lib notificacao
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
import './App.css'
//Rotas
import { Route, Routes } from 'react-router-dom'
//Paginas
import LoginPage from '../features/auth/pages/loginpage'
import RegistrarPage from '../features/auth/pages/registrarpage'
import CursoPage from "../features/cursos/pages/cursopage";
import ProtectedRouteUSER from "./ProtectedRoutes/ProtectedRoute.User";
import ProtectedRouteGuest from "./ProtectedRoutes/ProtectedRoute.Guest";

function App() {

    return (
        <main className="App">
            <ToastContainer/>
            <Routes>
                <Route path='/auth/login' element={
                    <ProtectedRouteGuest>
                        <LoginPage />
                    </ProtectedRouteGuest>
                }></Route>
                <Route path='/auth/cadastro' element={
                    <ProtectedRouteGuest>
                        <RegistrarPage />
                    </ProtectedRouteGuest>
                }></Route>
                <Route path="/cursos" element={
                    <ProtectedRouteUSER>
                        <CursoPage />
                    </ProtectedRouteUSER>
                } />
            </Routes>
        </main>
    )
}

export default App
