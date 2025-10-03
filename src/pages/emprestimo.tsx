import React from 'react'
import VerificacaoCodigoBarras from '../components/insercaoCodigoBarras'

export default function PaginaEmprestimo(){
    
    return (
        <>
        <h1>Empréstimo</h1>
        <p>Insira o código de barras do livro:</p>
            <VerificacaoCodigoBarras />
        <div>
            <input type="button"
            value="Próximo"
            >
            </input>
        </div>
        </>
    )
    
}