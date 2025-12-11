import React, { useState } from 'react'
import DadosLivro from '../components/insercaoCodigoBarras'
import { type dadosLivrosProps } from '../types/livroDTO'
import {type IInfoFamilia} from '../types/usuarioDTO.ts'
import { useNavigate } from 'react-router-dom'
import EmprestimoID from '../components/emprestimoID'
import InputCodigoFamilia from '../components/inputCodigoFamilia'
import dayjs from 'dayjs'
import Calendario from '../components/calendario'
import enviaForm from '../utils/enviaForm/index.ts'
import { CircularProgress } from '@mui/material'
import { Button } from '@mui/material'



export default function PaginaEmprestimo(){
    const hoje = dayjs()
    const proxima_semana = hoje.add(7, 'day')

    const navigate = useNavigate()
    const [livro, setLivro] = useState<dadosLivrosProps | null>(null)
    const [dataEmprestimo, setDataEmprestimo] = useState<dayjs.Dayjs>(hoje)
    const [dataPrevisaoDevolucao, setDataPrevisaoDevolucao] = useState<dayjs.Dayjs>(proxima_semana)
    const [idEmprestimo, setIdEmprestimo] = useState<number | null>(null)
    const [usuarioSelecionado, setUsuarioSelecionado] = useState<IInfoFamilia | null>(null)
    const [submitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const dadosEmprestimo = {
        id_emprestimo: idEmprestimo,
        id_livro: livro?.id,
        id_usuario: usuarioSelecionado?.id_usuario,
        realizado_em: dataEmprestimo.toISOString(),
        data_realizado_em: dataEmprestimo,
        data_previsao_devolucao_em: dataPrevisaoDevolucao,
    }

    const hojeProps = {
        data: dataEmprestimo,
        setData: setDataEmprestimo
    };

    const proximaSemanaProps = {
        data: dataPrevisaoDevolucao,
        setData: setDataPrevisaoDevolucao
    };

    return (
        <div className='w-screen h-screen justify-center items-center flex flex-col bg-emerald-500'>
        <div id="inputs"
        className='space-y-8 justify-items-center'
        >
        <EmprestimoID setId={setIdEmprestimo} id={idEmprestimo}/>
        <p>Insira o código de barras do livro:</p>
        <DadosLivro setLivro={setLivro} livro={livro}/>
        <InputCodigoFamilia setUsuario={setUsuarioSelecionado} usuario={usuarioSelecionado}/>
        </div>
        <div
        id="calendarios"
        className="flex flex-row mb-8">
        <Calendario {...hojeProps} label="Data de Empréstimo"/>
        <Calendario {...proximaSemanaProps} label="Previsão - Devolução"/>
        </div>
        <div className='mt-6'>
        <Button
        variant="outlined"
        onClick={async ()=> {
            setError(null)
            setSubmitting(true)
            try{
                await enviaForm(dadosEmprestimo,'POST', `emprestimos`)
                setSuccess(true)
                // show success then redirect to home after short delay
                setTimeout(()=> navigate('/'), 2000)
            }catch(err:any){
                setError(err?.message ?? 'Erro ao confirmar empréstimo')
            }finally{
                setSubmitting(false)
            }
        }}
        disabled={(!livro) || (!usuarioSelecionado) || submitting}
        >
        {submitting ? (
            <div className='flex items-center gap-2'><CircularProgress size={18}/> Confirmando...</div>
        ) : (
            'Confirma empréstimo'
        )}
        </Button>
        </div>

        {/* Success / Error feedback cards */}
        {success && (
            <div className='fixed inset-0 flex items-center justify-center'>
                <div className='bg-white rounded-lg shadow-lg p-6 w-80 text-center'>
                    <h3 className='text-green-600 font-semibold mb-2'>Empréstimo realizado com sucesso!</h3>
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


