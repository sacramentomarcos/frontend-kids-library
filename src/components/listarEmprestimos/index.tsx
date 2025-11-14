import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { DataGrid } from "@mui/x-data-grid"

export default function ListaEmprestimos() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['emprestimos'],
        queryFn: async () => {
        const response = await axios.get('http://127.0.0.1:3000/emprestimos')
        return response.data
        }
    })

    if (isLoading) return <p>Carregando...</p>
    if (error) return <p>erro ao carregar os dados</p>

    const colunas = [
        {
            field: 'id_emprestimo',
            headerName: 'ID',
            width:50
        },
        {
            field: 'id_livro',
            headerName:'idLivro',
            width:50
        },
        {
            field: 'id_usuario',
            headerName:'idUsuario',
            width:300
        },
        {
            field: 'data_realizado_em',
            headerName:'Realizado em',
            width:250
        },
        {
            field: 'data_previsao_devolucao_em',
            headerName:'Devolução prevista para',
            width:250
        }



    ]


    return (
        <div id='tabela'
        className="w-300 h-100">
        <DataGrid
        rows={data.map((e:any)=>({...e, id:e.id_emprestimo}))}
        columns={colunas}
        checkboxSelection
        />
        </div>
    )
}
