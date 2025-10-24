import React, { useState } from 'react'
import VerificacaoCodigoBarras from '../components/insercaoCodigoBarras'
import { type dadosLivrosProps } from '../types/livroDTO'
import { useNavigate } from 'react-router-dom'
import EmprestimoID from '../components/emprestimoID'
import InputCodigoFamilia from '../components/inputCodigoFamilia'
import dayjs from 'dayjs'
import Calendario from '../components/calendario'



export default function PaginaEmprestimo(){
    const hoje = dayjs()
    const proxima_semana = hoje.add(7, 'day')


    const navigate = useNavigate()
    const [livro, setLivro] = useState<dadosLivrosProps>()
    const [dataEmprestimo, setDataEmprestimo] = useState<dayjs.Dayjs>(hoje)
    const [dataPrevisaoDevolucao, setDataPrevisaoDevolucao] = useState<dayjs.Dayjs>(proxima_semana)
    const [idEmprestimo, setIdEmprestimo] = useState<number | null>(null)


    const hojeArgs = {
        data: dataEmprestimo,
        setData: setDataEmprestimo
    }

    const proximaSemanaArgs = {
        data: dataPrevisaoDevolucao,
        setData: setDataPrevisaoDevolucao
    }

    return (
        <>
        <EmprestimoID setId={setIdEmprestimo} id={idEmprestimo}/>
        <p>Insira o código de barras do livro:</p>
        <VerificacaoCodigoBarras setLivro={setLivro} livro={livro}/>
        <br />
        <InputCodigoFamilia />
        
        <Calendario {...hojeArgs} label="Data de Empréstimo"/>
        <Calendario {...proximaSemanaArgs} label="Previsão - Devolução"/>
        </>
    )
    
}


