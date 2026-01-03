import React from "react";
import {
    DatePicker
} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import 'dayjs/locale/pt-br'


type calendarioProps = {
    data: dayjs.Dayjs
    setData: (data:React.SetStateAction<dayjs.Dayjs>) => void
    label: string
}


export default function Calendario(props:calendarioProps) {
    return (
        <>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <DatePicker
        label={props.label}
        value={props.data}
        minDate={dayjs('2025-01-01')}
        onChange={(data)=>{data ? props.setData(data) : console.log('não há data')}}
        />
        </LocalizationProvider>
        </>
    )
}