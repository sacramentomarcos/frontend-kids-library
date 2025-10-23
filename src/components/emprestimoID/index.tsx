import React from "react";
import { useEffect, useState } from "react";

export default function EmprestimoID() {
    const [IdEmprestimo, setIdEmprestimo] = useState<number | null>(null)
    
    useEffect(() => {
        const buscarIdEmprestimo = async () => {
        const response = await fetch('http://127.0.0.1:3000/emprestimos/atual')
        const dados = await response.json()
        setIdEmprestimo(dados.id)
        }
        
        buscarIdEmprestimo()
    }, [])
    
    return (
        <>
        
        <h1>Emprestimo n° {IdEmprestimo}</h1>
        </>
    )
}