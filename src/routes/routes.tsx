import { createBrowserRouter } from 'react-router-dom'

import App from "../App";
import PaginaDevolucao from "../pages/devolucao";
import PaginaEmprestimo from "../pages/emprestimo";
import PaginaRegistro from "../pages/registro";
import PaginaRenovacao from "../pages/renovacao";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },{
    path: '/devolucao',
    element: <PaginaDevolucao />
  },{
    path: '/emprestimo',
    element: <PaginaEmprestimo/>
  },{
    path: '/registro',
    element: <PaginaRegistro/>
  },{
    path: '/renovacao',
    element: <PaginaRenovacao/>
  }
], {
  basename: '/'
});