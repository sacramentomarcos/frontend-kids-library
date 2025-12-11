import { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import ListaEmprestimos from '../components/listarEmprestimos'
import { List, Button, CircularProgress } from '@mui/material'
import dayjs from 'dayjs'
import enviaForm from '../utils/enviaForm/index.ts'
import { useNavigate } from 'react-router-dom'


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
    const [submitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()
    
    const data = {
        emprestimos: emprestimosSelecionado.map(e => e.idEmprestimo)
    }

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center gap-8'>
        <h1>Devolução</h1>
        <ListaEmprestimos emprestimosSelecionados={emprestimosSelecionado} setEmprestimoSelecionado={setEmprestimoSelecionado}/>
        <div>
            <Button
                variant='outlined'
                disabled={emprestimosSelecionado.length === 0 || submitting}
                onClick={async ()=>{
                    setError(null)
                    setSubmitting(true)
                    try{
                        await enviaForm(data, 'PATCH', 'devolucoes')
                        setSuccess(true)
                        setTimeout(()=> navigate('/'), 1500)
                    }catch(err:any){
                        setError(err?.message ?? 'Erro ao confirmar devolução')
                    }finally{
                        setSubmitting(false)
                    }
                }}
            >
                {submitting ? (<div className='flex items-center gap-2'><CircularProgress size={18}/> Confirmando...</div>) : 'Confirmar devolução'}
            </Button>
        </div>

        {success && (
            <div className='fixed inset-0 flex items-center justify-center'>
                <div className='bg-white rounded-lg shadow-lg p-6 w-80 text-center'>
                    <h3 className='text-green-600 font-semibold mb-2'>Devolução confirmada com sucesso!</h3>
                    <p className='text-sm text-gray-600 mb-4'>Você será redirecionado para a página inicial em instantes.</p>
                    <Button variant='contained' onClick={()=> navigate('/')}>Ir agora</Button>
                </div>
            </div>
        )}

        {error && (
            <div className='fixed bottom-6 right-6'>
                <div className='bg-red-100 border border-red-300 text-red-800 rounded-md px-4 py-3'>
                    <p className='font-medium'>Erro</p>
                    <p className='text-sm'>{error}</p>
                </div>
            </div>
        )}

        </div>
    );
};