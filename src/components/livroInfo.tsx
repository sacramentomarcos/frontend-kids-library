import React from "react";
import { type dadosLivrosProps } from "../types/livroDTO";


export default function DadosLivro({title, author, year, publisher}:dadosLivrosProps){
    return (
        <div>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <h3>{year}</h3>
            <h3>{publisher}</h3>
            
        </div>
    )
}