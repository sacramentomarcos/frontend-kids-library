import React, { type ChangeEvent, type SyntheticEvent } from "react";

import { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


type IInfoFamilia = {
    id_usuario: string
    codigo_familia: string
    nome_completo: string
    codigo_nome?:string
}


export default function InputCodigoFamilia() {
    //quais informações preciso MESMO no front?
    //ela quer digitar a família sem confirmar o nome?
    // eu acho perigoso isso, porque digitar um código sem confirmar que ele realmente quer
    // dizer o que você precisa dizer é triste!
    //vou colocar código - nome do familiar. Se ficar ruim, a gente troca
    const [infoFamilias, setInfoFamilias] = useState<IInfoFamilia[] | null>(null)
    const [usuarioSelecionado, setUsuarioSelecionado] = useState<IInfoFamilia | null>(null)

    function handleChange(e:React.SyntheticEvent, valor:IInfoFamilia | null) {
        setUsuarioSelecionado(valor)
    }
    
    useEffect(() => {
        async function buscaFamilias() {
        const dados = await fetch('http://127.0.0.1:3000/usuarios')
        const dadosJSON = await dados.json()
        dadosJSON.map((item:IInfoFamilia) => item.codigo_nome = `${item.codigo_familia} - ${item.nome_completo}`)
        setInfoFamilias(dadosJSON)
        }

        buscaFamilias()
    }, [])

    return (
        infoFamilias && (

        <Autocomplete
            disablePortal
            getOptionLabel={(option:IInfoFamilia) => option.codigo_nome ? option.codigo_nome : "erro ao requerer usuários"}
            isOptionEqualToValue={(option, value) => option.codigo_nome === value.codigo_nome}
            onChange={(e, valor) => handleChange(e, valor)}
            options={infoFamilias}
            renderInput={(params) => <TextField {...params} label="Código da família"/>}
        />)
        )
}
