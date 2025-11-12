import React from 'react'
import VerificacaoCodigoBarras from '../components/insercaoCodigoBarras'


export default function PaginaDevolucao(){
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
        <h1>Devolução</h1>
        <VerificacaoCodigoBarras />
        </div>
    )
    
} 