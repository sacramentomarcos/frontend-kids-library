import React, { useState, useEffect } from 'react'

export default function CodigoBarras() {
    function verificaCodigo(codigo:string) {
        if (codigo.length < 10) return
        const regex = new RegExp(/^[0-9]{10}([0-9]{3})?$|^[0-9-]{13,17}$/)
        return regex.test(codigo)
    }

    const [codigo, setCodigo] = useState('')

    const 

    return (
        <>
        <input
        onChange={(e) => setCodigo(e.target.value)}
        ></input>
        {codigo
        ? (<h1>existe vida e o codigo é diferente de nulo</h1>)
        : (<h1>não tem codigo</h1>)}
        </>
    )

}