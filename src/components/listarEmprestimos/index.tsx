import { useQuery } from "@tanstack/react-query"
import { axiosInstance } from "../../utils/api"
import { DataGrid, renderEditDateCell, type GridCellParams, type GridRowSelectionModel } from "@mui/x-data-grid"
import dayjs from "dayjs"
import { useState, type SetStateAction } from "react"

type EmprestimoType = {
    idEmprestimo: number
    codigoFamilia: number
    nomeCompleto: string
    titulo: string
    dataRealizadoEm: dayjs.Dayjs
}


export default function ListaEmprestimos({emprestimosSelecionados, setEmprestimoSelecionado}: {emprestimosSelecionados:EmprestimoType[], setEmprestimoSelecionado:React.Dispatch<React.SetStateAction<EmprestimoType[]>>}) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['emprestimos'],
        queryFn: async () => {
    const response = await axiosInstance.get('/emprestimos')
        const emprestimosAtivos = [...response.data].filter((e)=> e.status === true)
        return emprestimosAtivos
        }
    })

    const [dataDevolucao, setDataDevolucao] = useState<Record<number, dayjs.Dayjs | null>>({})

    if (isLoading) return <p>Carregando...</p>
    if (error) return <p>erro ao carregar os dados</p>

    function handleSelectionChange(selectionModel: GridRowSelectionModel) {
        if (!data) {
            setEmprestimoSelecionado({} as EmprestimoType[])
            return
        }

        const ids = new Set(selectionModel.ids)
        const selectedRows = data.filter((row:any) => ids.has(row.idEmprestimo))

        setEmprestimoSelecionado(selectedRows)
    }

    const colunas = [
        {
            field: 'idEmprestimo',
            headerName: 'n° Empréstimo',
            width:50
        },
        {
            field: 'nomeCompleto',
            headerName:'Nome Completo',
            width:300
        },
        {
            field: 'titulo',
            headerName:'Título',
            width:300
        },
        {
            field: 'dataRealizadoEm',
            headerName:'Realizado em',
            width:250
        },
        {
            field: 'devolucaoPrevistaEm',
            headerName: 'Devolucao em',
            width: 200,
        }
    ]

    return (
        <div id='tabela'
        className="w-300 h-100">
        <DataGrid
        rowHeight={70}
        rows={data?.map((row:any)=>({...row, id:row.idEmprestimo, dataRealizadoEm: dayjs(row.dataRealizadoEm).format('DD/MM/YYYY')})) ?? []}
        columns={colunas}
        onRowSelectionModelChange={handleSelectionChange}
        checkboxSelection
        sx={{ '--DataGrid-overlayHeight': '300px' }}
        />
        </div>
    )
}
