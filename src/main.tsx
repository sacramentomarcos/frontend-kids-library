import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'

import App from "./App";
import PaginaDevolucao from "./pages/devolucao";
import paginaEmprestimo from "./pages/emprestimo";
import paginaRegistro from "./pages/registro";
import paginaRenovacao from "./pages/renovacao";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },{
    path: '/devolucao',
    element: <PaginaDevolucao />
  },{
    path: '/',
    element: <App/>
  },{
    path: '/',
    element: <App/>
  },

])

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
