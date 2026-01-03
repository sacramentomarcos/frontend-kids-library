import { useEffect } from "react";
import axiosInstance from "../../utils/api"

type emprestimoIDProps = {
    setId: (id:number) => void
    id?: number | null
}

export default function EmprestimoID({ id, setId }: emprestimoIDProps) {
    
    useEffect(() => {
    const buscarIdEmprestimo = async () => {
    const response = await axiosInstance.get('/emprestimos/atual')
    const dados = response.data
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