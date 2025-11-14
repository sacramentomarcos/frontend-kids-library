import React from 'react'
import { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import get from '../utils/api'

type Emprestimos = {

}

export default function PaginaDevolucao(){
    // PRECISO AQUI VER TODOS OS EMPRESTIMOS QUE ACONTECERAM E AINDA ESTÃO ATIVO
    const [emprestimos, setEmprestimos] = useState([])

    async function loadEmprestimos() {
        const response:any = await get('/emprestimos')
        console.log(response)
    }


    

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
        <h1>Devolução</h1>
        <button type='button' onClick={loadEmprestimos}></button>
        
        </div>
    );
    
};