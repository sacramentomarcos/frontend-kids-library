import { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import ListaEmprestimos from '../components/listarEmprestimos'
import { List } from '@mui/material'
import dayjs from 'dayjs'

type EmprestimoType = {
    idEmprestimo: number
    codigoFamilia: number
    nomeCompleto: string
    titulo: string
    dataRealizadoEm: dayjs.Dayjs
}

export default function PaginaDevolucao(){
    // PRECISO AQUI VER TODOS OS EMPRESTIMOS QUE ACONTECERAM E AINDA ESTÃO ATIVO
    const [emprestimosSelecionado, setEmprestimoSelecionado] = useState<EmprestimoType[]>([])
    
    const data = {
        ...emprestimosSelecionado
    }

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center gap-8'>
        <h1>Devolução</h1>
        
        <ListaEmprestimos emprestimosSelecionados={emprestimosSelecionado} setEmprestimoSelecionado={setEmprestimoSelecionado}/>
        <button type='button' disabled={!!!emprestimosSelecionado} onClick={() => console.log(data)}>Confirmar devolução</button>
        </div>
    );
};