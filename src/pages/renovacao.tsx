
import { useState } from 'react'


export default function PaginaRenovacao(){
    const [ livroCarregado ] = useState<Boolean>(false)

    return (
    <>
    <h1>Renovação</h1>
    <p>Insira o código de barras do livro:</p>
        
    {
        livroCarregado && (
            <>laele</>
        )
    }
    </>
    )
}