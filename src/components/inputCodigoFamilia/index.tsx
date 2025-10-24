import React from "react";

import { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


type IInfoFamilia = {
    id_usuario: string
    codigo_familia: string
    nome_completo: string
}


export default function InputCodigoFamilia() {
    //quais informações preciso MESMO no front?
    //ela quer digitar a família sem confirmar o nome?
    // eu acho perigoso isso, porque digitar um código sem confirmar que ele realmente quer 
    // dizer o que você precisa dizer é triste!
    //vou colocar código - nome do familiar. Se ficar ruim, a gente troca
    const [infoFamilias, setInfoFamilias] = useState<IInfoFamilia[] | null>(null)
    const [usuarioSelecionado, setUsuarioSelecionado] = useState<string>('')

    function handleChange(e){
        setUsuarioSelecionado(e.target.value)
        console.log('familia selecionada ->', e.target.value)
    }
    
    useEffect(() => {
        async function buscaFamilias() {
        const dados = await fetch('http://127.0.0.1:3000/usuarios')
        const dadosJSON = await dados.json()
        setInfoFamilias(dadosJSON)
        }

        buscaFamilias()
    }, [])

    return (
        infoFamilias && (

        <Autocomplete
            disablePortal
            getOptionLabel={(option:IInfoFamilia) => option.nome_completo}
            isOptionEqualToValue={(option, value) => {
                return option.nome_completo === value.nome_completo
            }}
            options={infoFamilias}
            renderInput={(params) => <TextField {...params} label="Código da família"/>}
        />)
        )
}
