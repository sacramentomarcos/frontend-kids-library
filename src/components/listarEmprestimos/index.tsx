import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { DataGrid } from "@mui/x-data-grid"
import type dayjs from "dayjs"

type EmprestimoType = {
    idEmprestimo: number
    codigoFamilia: number
    nomeCompleto: string
    titulo: string
    dataRealizadoEm: dayjs.Dayjs
}

type ListaEmprestimoProps = {
    emprestimosSelecionado: EmprestimoType[]
    setEmprestimoSelecionado: (a:boolean) => boolean
}

export default function ListaEmprestimos({emprestimoSelecionado, setEmprestimoSelecionado}: ListaEmprestimoProps) {
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
            field: 'idEmprestimo',
            headerName: 'ID',
            width:50
        },
        {
            field: 'nomeCompleto',
            headerName:'Nome Completo',
            width:300
        },
        {
            field: 'dataRealizadoEm',
            headerName:'Realizado em',
            width:250
        },
        {
            field: 'dataPrevisaoDevolucaoEm',
            headerName:'Devolução prevista para',
            width:250
        }
    ]

    if (data) console.log(data)


    return (
        <div id='tabela'
        className="w-300 h-100">
        <DataGrid
        rows={data.map((row:any)=>({...row, id:row.idEmprestimo}))}
        columns={colunas}
        onRowSelectionModelChange={()=>setEmprestimoSelecionado()}
        />
        </div>
    )
}
