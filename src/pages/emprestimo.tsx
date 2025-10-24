import React, { useState } from 'react'
import VerificacaoCodigoBarras from '../components/insercaoCodigoBarras'
import { type dadosLivrosProps } from '../types/livroDTO'
import { useNavigate } from 'react-router-dom'
import EmprestimoID from '../components/emprestimoID'
import InputCodigoFamilia from '../components/inputCodigoFamilia'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import Calendario from '../components/calendario'



export default function PaginaEmprestimo(){
    const dataAtual = new Date()
    const hoje = dayjs(dataAtual)
    

    const navigate = useNavigate()
    const [livro, setLivro] = useState<dadosLivrosProps>()
    const [dataEmprestimo, setDataEmprestimo] = useState<string>(hoje)
    const [dataPrevisaoDevolucao, setDataPrevisaoDevolucao] = useState<Date | null>(null)

    const calendarioArgs = {
        dataEmprestimo,
        setDataEmprestimo
    }


    return (
        <>
        <EmprestimoID />
        <p>Insira o código de barras do livro:</p>
        <VerificacaoCodigoBarras onLivroEncontrado={setLivro}/>
        <br />
        <InputCodigoFamilia />
        
        <Calendario {...calendarioArgs} label="Data de Empréstimo"/>
        <Calendario {...calendarioArgs} label="Previsão - Devolução"/>


        </>
    )
    
}