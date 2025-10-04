import React, { useEffect } from 'react'
import { useState } from 'react'

export default function PaginaRegistro(){
    const [livroVisivel, setLivroVisivel] = useState<boolean>(false)


    return (
        <>
        <h1>Registro</h1>
        <p>Insira o código de barras do livro:</p>
            
        {livroVisivel && (
            <form onSubmit={}>
            <button>Prosseguir para próxima página</button>
            </form>
        )}
        </>
    )
    
}