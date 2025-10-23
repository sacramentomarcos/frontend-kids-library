import React from "react";

import { useState, useEffect } from "react";

type IInfoFamilia = {
    idUsuario: string
    codigoFamilia: string
    nomeCompleto: string
}


export default function InputCodigoFamilia() {
    //quais informações preciso MESMO no front?
    //ela quer digitar a família sem confirmar o nome?
    // eu acho perigoso isso, porque digitar um código sem confirmar que ele realmente quer 
    // dizer o que você precisa dizer é triste!
    //vou colocar código - nome do familiar. Se ficar ruim, a gente troca
    const [infoFamilias, setInfoFamilias] = useState<IInfoFamilia[] | null>(null)
    const [usuarioSelecionado, setUsuarioSelecionado] = useState<string>('')

    function handleChange(e:React.ChangeEvent<HTMLSelectElement>){
        setUsuarioSelecionado(e.target.value)
        console.log('familia selecionada ->', e.target.value)
    }
    
    useEffect(() => {
        async function buscaFamilias() {
        const dados = await fetch('localhost:3000/usuarios')
        const dadosJSON:IInfoFamilia[] = await dados.json()
        setInfoFamilias(dadosJSON)
        }

        buscaFamilias()
    }, [])

    return (
        {infoFamilias ?(
        <div>
            <>
            <label htmlFor="familia" style={{ display: "block", marginBottom: 8 }}>
            Código da família:
            </label>
            <select
                id="familia"
                value={usuarioSelecionado}
                onChange={handleChange}
                style={{padding:8, width:"100%",maxWidth:300}}
            >
            <option value="" aria-placeholder="Selecione uma família"></option>
            {infoFamilias.map((familia) => (
                <option key={familia.idUsuario} value={familia.idUsuario}>
                    {familia.codigoFamilia} - {familia.nomeCompleto}
                </option>
            ))}
            </select>
            </>
        </div>))
        :
        <div>aguarde</div>}
        }
    )
}