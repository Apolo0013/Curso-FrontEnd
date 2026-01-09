import './App.scss'
//Rotas
import { Route, Routes } from 'react-router-dom'
//Paginas
import LoginPage from '../features/auth/pages/loginpage'

function App() {

    return (
        <main className="App">
            <Routes>
                <Route path='/' element={<LoginPage/>}></Route>
            </Routes>
        </main>
    )
}

export default App
