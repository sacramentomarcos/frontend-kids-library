import { useState } from "react"
import React from 'react'

export default function PaginaRenovacao(){
    const [barcode, setBarcode] = useState('')

    function handleInput(e){
        setBarcode(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault()
        const form = e.target;
        const formData = formData(form)
        console.log(formData)
    }


    return (
        <>
        <h1>Renovação</h1>
        <form onSubmit={handleSubmit}>
        <label>Escaneie o código do livro
        <input type="text"
        value={barcode}
        onChange={handleInput}
        />
        </label>
        </form>
        </>
    )
}