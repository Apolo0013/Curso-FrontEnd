import './App.scss'
//Rotas
import { Route, Routes } from 'react-router-dom'
//Paginas
import LoginPage from '../features/auth/pages/loginpage'
import RegistrarPage from '../features/auth/pages/registrarpage'

function App() {

    return (
        <main className="App">
            <Routes>
                <Route path='/auth/login' element={<LoginPage />}></Route>
                <Route path='/auth/cadastro' element={<RegistrarPage/>}></Route>
            </Routes>
        </main>
    )
}

export default App
