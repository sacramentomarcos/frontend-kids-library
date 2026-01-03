import React, {type SetStateAction} from "react";

import { useState, useEffect } from "react";
import axiosInstance from "../../utils/api"
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


type IInfoFamilia = {
    id_usuario: string
    codigo_familia: string
    nome_completo: string
    codigo_nome?:string
}

type InputCodigoProps = {
    setUsuario: React.Dispatch<SetStateAction<IInfoFamilia | null>>;
    usuario: IInfoFamilia | null;
}


export default function InputCodigoFamilia({ setUsuario }:InputCodigoProps) {
    //quais informações preciso MESMO no front?
    //ela quer digitar a família sem confirmar o nome?
    // eu acho perigoso isso, porque digitar um código sem confirmar que ele realmente quer
    // dizer o que você precisa dizer é triste!
    //vou colocar código - nome do familiar. Se ficar ruim, a gente troca
    const [infoFamilias, setInfoFamilias] = useState<IInfoFamilia[] | null>(null)
    // const [usuarioSelecionado, setUsuarioSelecionado] = useState<IInfoFamilia | null>(null)
    
    useEffect(() => {
        async function buscaFamilias() {
        const resp = await axiosInstance.get('/usuarios')
        const dadosJSON = resp.data
        dadosJSON.map((item:IInfoFamilia) => item.codigo_nome = `${item.codigo_familia} - ${item.nome_completo}`)
        setInfoFamilias(dadosJSON)
        }

        buscaFamilias()
    }, [])

    return (
        infoFamilias && (

        <Autocomplete
        className="my-8 w-full"
            disablePortal
            getOptionLabel={(option: IInfoFamilia) => option.codigo_nome ? option.codigo_nome : "erro ao requerer usuários"}
            isOptionEqualToValue={(option, value) => option.codigo_nome === value.codigo_nome}
            onChange={(_, valor) => setUsuario(valor)}
            options={infoFamilias}
            renderInput={(params) => <TextField {...params} label="Código da família"/>}
        />)
        )
}
