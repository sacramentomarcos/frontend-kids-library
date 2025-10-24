import React from "react";
import { type dadosResponsavelProps } from "../types/dadosResponsavelprops";

export default function DadosResponsavel({codigoFamilia}:dadosResponsavelProps) {

    return (
        <>
            <input
            type="text"
            value={codigoFamilia}
            id="codigofamilia">
            </input>
        </>
    )

}