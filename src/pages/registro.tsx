import React from 'react'
import VerificacaoCodigoBarras from '../components/insercaoCodigoBarras'

export default function PaginaRegistro(){
    return (
        <>
        <h1>Registro</h1>
        <p>Insira o código de barras do livro:</p>
            <VerificacaoCodigoBarras />
        </>
    )
    
}