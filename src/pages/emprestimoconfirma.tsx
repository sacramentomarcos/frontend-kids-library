import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DadosLivro from "../components/livroInfo";
import type { dadosLivrosProps } from "../types/livroDTO";

export default function PaginaEmprestimoConfirma(){
    const location = useLocation()

    const infoLivro:dadosLivrosProps = location.state?.livro || {}

    useEffect(()=>{
        console.log(infoLivro)
    }, [])

    return (
    <>
        <h1>página de confirmação do empréstimo</h1>
        
        {infoLivro &&
        <DadosLivro
        title={infoLivro.title}
        author={infoLivro?.author}
        year={infoLivro?.year}
        publisher={infoLivro?.publisher}
        />}
    </>
    )
}
