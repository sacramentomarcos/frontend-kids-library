import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { DataGrid, renderEditDateCell, type GridCellParams, type GridRowSelectionModel } from "@mui/x-data-grid"
import dayjs from "dayjs"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { useState } from "react"
import { DatePicker } from "@mui/x-date-pickers"

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
        const response = await axios.get('http://127.0.0.1:3000/emprestimos')
        return response.data
        }
    })

    const [dataDevolucao, setDataDevolucao] = useState<Record<number, dayjs.Dayjs | null>>({})

    if (isLoading) return <p>Carregando...</p>
    if (error) return <p>erro ao carregar os dados</p>

    function handleSelectionChange(selectionModel: GridRowSelectionModel) {
        if (!data) {
            setEmprestimoSelecionado({})
            return
        }

        const ids = new Set(selectionModel.ids)
        const selectedRows = data.filter((row:any) => ids.has(row.idEmprestimo))
        const
        
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
            field: 'devolucaoEm',
            headerName: 'Devolucao em',
            renderCell: (params: GridCellParams<any, Date>) => (
                <div className="h-full m-2">
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                        <DatePicker
                        value={params.row.idEmprestimo}
                        minDate={dayjs('2025-01-01')}
                        onChange={(data)=>{
                            setDataDevolucao(prev => ({
                                ...prev,
                                data.
                            }))
                        }}
                        />
                </LocalizationProvider>
                </div>
            ),
            width: 200,
            
        }
    ]

    return (
        <div id='tabela'
        className="w-300 h-100">
        <DataGrid
        rowHeight={70}
        rows={data?.map((row:any)=>({...row, id:row.idEmprestimo})) ?? []}
        columns={colunas}
        onRowSelectionModelChange={handleSelectionChange}
        checkboxSelection
        />
        </div>
    )
}
