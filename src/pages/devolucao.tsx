import React from 'react'
import { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import ListaEmprestimos from '../components/listarEmprestimos'
import { List } from '@mui/material'



export default function PaginaDevolucao(){
    // PRECISO AQUI VER TODOS OS EMPRESTIMOS QUE ACONTECERAM E AINDA ESTÃO ATIVO
    

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
        <h1>Devolução</h1>

        <button type='button'></button>
        <ListaEmprestimos/>
        </div>
    );
    
};