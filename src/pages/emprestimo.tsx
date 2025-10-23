import React, { useState } from 'react'
import VerificacaoCodigoBarras from '../components/insercaoCodigoBarras'
import { type dadosLivrosProps } from '../types/livroDTO'
import { useNavigate } from 'react-router-dom'
import EmprestimoID from '../components/emprestimoID'


export default function PaginaEmprestimo(){
    const navigate = useNavigate()
    const [livro, setLivro] = useState<dadosLivrosProps>()



    return (
        <>
        <EmprestimoID />
        <p>Insira o código de barras do livro:</p>
            <VerificacaoCodigoBarras onLivroEncontrado={setLivro}/>
        <br />
        <InputCodigoFamilia />

        </>
    )
    
}