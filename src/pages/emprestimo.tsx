import React, { useState } from 'react'
import VerificacaoCodigoBarras from '../components/insercaoCodigoBarras'
import { type dadosLivrosProps } from '../types/livroDTO'
import { useNavigate } from 'react-router-dom'


export default function PaginaEmprestimo(){
    const navigate = useNavigate()
    const [livro, setLivro] = useState<dadosLivrosProps>()



    return (
        <>
        <h1>Empréstimo</h1>
        <p>Insira o código de barras do livro:</p>
            <VerificacaoCodigoBarras onLivroEncontrado={setLivro}/>
        <br />
        <input
        type="text"
        placeholder='Código da família'
        
        ></input>
        {
        livro &&
            (
            <div>
                <input type="button"
                value="Próximo"
                onClick={() => navigate('/confirmaemprestimo', {state:{livro}})}
                >
                </input>
            </div>
            )
        }
        </>
    )
    
}