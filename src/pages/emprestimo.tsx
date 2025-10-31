import React, { useState } from 'react'
import VerificacaoCodigoBarras from '../components/insercaoCodigoBarras'
import { type dadosLivrosProps } from '../types/livroDTO'
import {type IInfoFamilia} from '../types/usuarioDTO.ts'
import { useNavigate } from 'react-router-dom'
import EmprestimoID from '../components/emprestimoID'
import InputCodigoFamilia from '../components/inputCodigoFamilia'
import dayjs from 'dayjs'
import Calendario from '../components/calendario'
import enviaForm from '../utils'
import { Button } from '@mui/material'
import { ClassNames } from '@emotion/react'



export default function PaginaEmprestimo(){
    const hoje = dayjs()
    const proxima_semana = hoje.add(7, 'day')


    const navigate = useNavigate()
    const [livro, setLivro] = useState<dadosLivrosProps | null>(null)
    const [dataEmprestimo, setDataEmprestimo] = useState<dayjs.Dayjs>(hoje)
    const [dataPrevisaoDevolucao, setDataPrevisaoDevolucao] = useState<dayjs.Dayjs>(proxima_semana)
    const [idEmprestimo, setIdEmprestimo] = useState<number | null>(null)
    const [idLivro, setIdLivro] = useState<number | null>(null)
    const [usuarioSelecionado, setUsuarioSelecionado] = useState<IInfoFamilia | null>(null)

    const dadosEmprestimo = {
        id_emprestimo: idEmprestimo,
        id_livro: idLivro,
        realizado_em: dataEmprestimo.toISOString(),
        data_realizado_em: dataEmprestimo,
        data_devolucao_em: dataPrevisaoDevolucao,
    }

    const hojeProps = {
        data: dataEmprestimo,
        setData: setDataEmprestimo
    }

    const proximaSemanaProps = {
        data: dataPrevisaoDevolucao,
        setData: setDataPrevisaoDevolucao
    }


    return (
        <div className='w-screen justify-center items-center flex flex-col'>
        <div id="inputs"
        className='space-y-8 justify-items-center'
        >
        <EmprestimoID setId={setIdEmprestimo} id={idEmprestimo}/>
        <p>Insira o código de barras do livro:</p>
        <VerificacaoCodigoBarras setLivro={setLivro} livro={livro}/>
        <InputCodigoFamilia setUsuario={setUsuarioSelecionado}/>
        </div>
        <div id="calendarios" className="flex flex-row mb-8" >
        <Calendario {...hojeProps} label="Data de Empréstimo"/>
        <Calendario {...proximaSemanaProps} label="Previsão - Devolução"/>
        </div>
        <Button
        variant="outlined"
        onSubmit={()=> enviaForm(dadosEmprestimo, `emprestimos/${idEmprestimo}`)}
        disabled={(!livro)}
        >
        Confirma empréstimo
        </Button>
        </div>
    )
    
}


