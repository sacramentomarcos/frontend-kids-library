import React, { useEffect, useState } from "react";
import DadosLivro from "./livroInfo";
import { type dadosLivrosProps } from "../types/livroDTO";

export default function VerificacaoCodigoBarras(){
    const [codigoBarras, setCodigoBarras] = useState('')
    const [dadosLivro, setDadosLivro] = useState<dadosLivrosProps | null>(null)

    function verificaCodigo(codigo:string){
        if (codigo.length < 10) return
        const regex = new RegExp(/^[0-9]{10}([0-9]{3})?$|^[0-9-]{13,17}$/)
        return regex.test(codigo)
    }

    useEffect(()=>{
        if (!verificaCodigo(codigoBarras)) return;
        
        const timeout = setTimeout(async () => {
            try {
            const dadosLivro: Response = await fetch(`https://brasilapi.com.br/api/isbn/v1/${codigoBarras}`);
            if (!dadosLivro.ok) throw new Error('Livro não encontrado')
            const dadosJSON = await dadosLivro.json();
            const livroFormatado: dadosLivrosProps = {
                title: dadosJSON.title,
                author: dadosJSON.authors ? dadosJSON.authors[0] : 'Não identificado',
                year: dadosJSON.year ? dadosJSON.year : 'Não identificado',
                publisher: dadosJSON.publisher ? String(dadosJSON.year) : 'Não identificado'
            }
            setDadosLivro(livroFormatado)

            } catch (e) {
                console.log(`error - ${e}`);
                setDadosLivro(null)
            }
        }, 800)

        return () => clearTimeout(timeout);
    }, [codigoBarras]);

    
    // async function handleInput(e:React.ChangeEvent<HTMLInputElement>){
    //     const valor = e.target.value
    //     setCodigoBarras(valor)
    //     if (!verificaCodigo(valor)){
    //         return
    //     }
    //     const dadosLivro = await fetch(`https://brasilapi.com.br/api/isbn/v1/${valor}`)
    //     console.log(dadosLivro)
    //     setMostraDadosLivro(true)
    // }

    return (
        <>
        <h1>Renovação</h1>
        <input
        type='text'
        onChange={(e) => setCodigoBarras(e.target.value)}
        autoFocus
        >
        </input>
        {
            dadosLivro &&
            (   <>
                <h2>Dados do livro</h2>
                <DadosLivro
                title={dadosLivro.title}
                author={dadosLivro.author}
                year={dadosLivro.year}
                publisher={dadosLivro.publisher}
                />
                </>

            )
        }
        </>
    )
}