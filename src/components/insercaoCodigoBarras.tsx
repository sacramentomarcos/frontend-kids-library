import React, { useState } from "react";

export default function VerificacaoCodigoBarras(){
    const [codigoBarras, setCodigoBarras] = useState('')

    function verificaCodigo(string:string){
        const regex = new RegExp(/^(97(8|9))?\d{9}(\d|X)$/)
        return regex.test(string)
    }

    
    async function handleInput(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        const valor = e.target.value
        setCodigoBarras(valor)
        if (!verificaCodigo(valor)){
            console.log('verificou e não efetuou.')
            return
        }
        const dados = await fetch('localhost:3333/all_usuarios')
        console.log(dados)
        console.log('conseguiu setar valor')
    }



    return (
        <>
        <h1>Renovação</h1>
        <h2>valor:{codigoBarras}</h2>
        <input
        type='text'
        onChange={handleInput}
        >
        </input>
        </>
    )
}