import { useState } from "react"
import React from 'react'

export default function PaginaRenovacao(){
    const [barcode, setBarcode] = useState('')

    function handleChange(e){
        setBarcode(e.target.value)
    }

    function verifyInput(e){
        const regex = new RegExp(/^(97(8|9))?\d{9}(\d|X)$/)
        return regex.test(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(barcode)
        if (!verifyInput(barcode)) {
            console.log('não validado', barcode)
            return
        }
        
        console.log(barcode)
        console.log('validado')
    }


    return (
        <>
        <h1>Renovação</h1>
        <form onSubmit={handleSubmit}>
        <label>Escaneie o código do livro
        <input type="text"
        value={barcode}
        onChange={handleChange}
        />
        </label>
        </form>
        </>
    )
}