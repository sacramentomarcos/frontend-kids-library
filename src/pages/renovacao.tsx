import React from 'react'
import { useEffect, useState } from 'react'
import VerificacaoCodigoBarras from '../components/insercaoCodigoBarras'
import type { dadosLivrosProps } from '../types/livroDTO'


export default function PaginaRenovacao(){
    const [livroCarregado, setLivroCarregado] = useState<Boolean>(false)

    return (
    <>
    <h1>Renovação</h1>
    <p>Insira o código de barras do livro:</p>
        <VerificacaoCodigoBarras />
    {
        livroCarregado && (
            <>laele</>
        )
    }
    </>
    )
}