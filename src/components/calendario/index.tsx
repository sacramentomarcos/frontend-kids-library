import React, { type SetStateAction } from "react";
import {
    DatePicker,
    type DatePickerProps
} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import 'dayjs/locale/pt-br'


type calendarioProps = {
    dataEmprestimo: string
    setDataEmprestimo: (data:React.SetStateAction<string>) => void
    label: 'Data de Empréstimo' | 'Previsão - Devolução'
}


export default function Calendario(props:calendarioProps) {
    return (
        <>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <DatePicker
        label={props.label}
        value={props.dataEmprestimo}
        minDate={dayjs('2025-01-01')}
        onChange={(data)=>props.setDataEmprestimo(data)}
        />
        </LocalizationProvider>
        </>
    )
}