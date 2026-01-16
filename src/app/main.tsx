import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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
