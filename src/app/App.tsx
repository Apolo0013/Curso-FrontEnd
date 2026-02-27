//Lib notificacao
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
import './App.scss'
import RoutesMain from "./route/routes";

function App() {

    return (
        <main className="App">
            <ToastContainer />
            <RoutesMain />
        </main>
    )
}

export default App
