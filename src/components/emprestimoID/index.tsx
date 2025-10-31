import React from "react";
import { useEffect } from "react";

type emprestimoIDProps = {
    setId: (id:number) => void
    id?: number | null
}

export default function EmprestimoID({ id, setId }: emprestimoIDProps) {
    
    useEffect(() => {
        const buscarIdEmprestimo = async () => {
        const response = await fetch('http://127.0.0.1:3000/emprestimos/atual')
        const dados = await response.json()
        const id: number = dados.id
        setId(id)
        }

        buscarIdEmprestimo()
    }, [])
    
    return (
        <>
        {id && (
        <h1 className="my-8">Emprestimo n° {id}</h1>
        )}
        </>
    )
}