//Global CSS
import '../styles/main.scss'
//React
import { createRoot } from 'react-dom/client'
//Main
import App from './App.tsx'
//Rota
import { BrowserRouter } from 'react-router-dom'
//react query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const Queryclient: QueryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={Queryclient}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
  </QueryClientProvider>,
)
