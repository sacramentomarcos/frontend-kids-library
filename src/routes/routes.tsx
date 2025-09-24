// import React from "react";
// import { Route, Routes } from "react-router-dom";

// import App from "../App";
// import paginaDevolucao from "../pages/devolucao";
// import paginaEmprestimo from "../pages/emprestimo";
// import paginaRegistro from "../pages/registro";
// import paginaRenovacao from "../pages/renovacao";

// export default function Rotas(){
//     return (
//         <Routes>
//             <Route path='/' Component={App}></Route>
//             <Route path='/devolucao' Component={paginaDevolucao}></Route>
//             <Route path='/renovacao' Component={paginaRenovacao}></Route>
//             <Route path='/registro' Component={paginaRegistro}></Route>
//             <Route path='/emprestimo' Component={paginaEmprestimo}></Route>
//         </Routes>
//     )

// }

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
  },

], {
  basename: '/'
});