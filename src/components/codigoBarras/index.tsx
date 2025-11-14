import { Dayjs } from 'dayjs'
import { TextField } from '@mui/material'

type Emprestimos = {
    id_emprestimo:number
    id_livro: number
    id_usuario: string
    realizado_em: Dayjs
    data_realizado_em: Dayjs
    data_previsao_devolucao_em: Dayjs
    status: boolean
    data_devolucao_em?: Dayjs
}

export default function CodigoBarras({codigo, setCodigo}: {codigo:string, setCodigo: (codigo:string) => void}) {

    function codigoValidado(codigoParaVerificar:string) {
        setCodigo(codigoParaVerificar)
        if (codigoParaVerificar.length < 10) return
        const regex = new RegExp(/^[0-9]{10}([0-9]{3})?$|^[0-9-]{13,17}$/)
        return regex.test(codigoParaVerificar)
    }

    function handleChange(codigoInserido:string) {
        if (!codigoValidado(codigoInserido)) {
            return
        }
        setCodigo(codigoInserido)
    }

    return (
        <>
        <TextField
        variant='outlined'
        className='bg-sky-100 w-1/5'
        onChange={(e) => handleChange(e.target.value)}
        autoFocus
        placeholder='insira o código de barras do livro'
        ></TextField>
        {codigo
        ? (<h1>existe vida e o codigo é diferente de nulo</h1>)
        : (<></>)}
        </>
    )

}