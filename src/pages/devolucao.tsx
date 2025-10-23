import React from 'react'
import VerificacaoCodigoBarras from '../components/insercaoCodigoBarras'


export default function PaginaDevolucao(){
    return (
        <>
        <h1>Devolução</h1>
        <EmprestimoID />
        <p>Insira o código de barras do livro:</p>
            <VerificacaoCodigoBarras />
        </>
    )
    
} 