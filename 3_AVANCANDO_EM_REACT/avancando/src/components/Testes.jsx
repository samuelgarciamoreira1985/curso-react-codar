import React from "react";
import { useState } from "react";

const Testes = ({descricao, valor, qualidade}) => {


    return (
        <div>
           <table>
            <caption>Hortifruti do Samuca</caption>
            <thead>
                <tr>
                    <th> Descrição</th>
                    <th> Valor</th>
                    <th> Qualidade</th>
                </tr>
            </thead>
            <tbody>
                <th>{descricao}</th>
                <th>{valor}</th>
                <th>{qualidade}</th>
            </tbody>
           </table>
               
        </div>
    )
}

export default Testes