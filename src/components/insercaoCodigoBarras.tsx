import React, { useEffect, useState } from "react";
import DadosLivro from "./livroInfo";
import { type dadosLivrosProps } from "../types/livroDTO";
import TextField from "@mui/material/TextField";


type Props = {
    setLivro: (livro: dadosLivrosProps) => void
    livro?: dadosLivrosProps
}

export default function VerificacaoCodigoBarras({ livro, setLivro }: Props) {
    const [codigoBarras, setCodigoBarras] = useState('')

    function verificaCodigo(codigo:string) {
        if (codigo.length < 10) return
        const regex = new RegExp(/^[0-9]{10}([0-9]{3})?$|^[0-9-]{13,17}$/)
        return regex.test(codigo)
    }

    useEffect(()=>{
        if (!verificaCodigo(codigoBarras)) return;
        
        const timeout = setTimeout(async () => {
            try {
                const dadosLivro: Response = await fetch(`http://127.0.0.1:3000/livros/${codigoBarras}`);


            if (!dadosLivro.ok) throw new Error('Livro não encontrado');
            const dadosJSON = await dadosLivro.json();
            const livroFormatado: dadosLivrosProps = {
                title: dadosJSON.titulo,
                author: dadosJSON.autor,
                year: dadosJSON.ano_publicacao
            }
            setLivro(livroFormatado)
            console.log('livro formatou')
            } catch (e) {
                console.log(`error - ${e}`);
            }
        }, 800)

        return () => clearTimeout(timeout);
    }, [codigoBarras]);

    return (
    <>
        {/* <input
        type='text'
        onChange={(e) => setCodigoBarras(e.target.value)}
        placeholder="Escaneie código do livro"
        autoFocus
        >
        </input> */}

        <TextField
        id="codigoBarras"
        onChange={(e) => setCodigoBarras(e.target.value)}
        autoFocus
        variant="outlined"
        required
        label="Escaneie o código de barras"
        />

        {
            livro &&
            (   <>
                <h2>Dados do livro</h2>
                <DadosLivro
                title={livro.title}
                author={livro.author}
                year={livro.year}
                />
                </>
            )
        }
    </>
    )
    
}