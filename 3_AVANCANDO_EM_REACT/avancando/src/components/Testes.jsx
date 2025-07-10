import React from "react";
import { useState } from "react";

const Testes = ({descricao, valor, qualidade}) => {

    const [listaLinguagens,setLinguagens] = useState([
        {
            id: 1,
            description: "java"
        },
        {
            id: 2,
            description: "javascript"
        },
        {
            id: 3,
            description: "php"
        }
    ])

    const deleteCursos = () =>{ 
    const delRamdom = Math.floor(Math.random() * 4)
    setLinguagens((prevCursos) =>
        prevCursos.filter((user) => delRamdom !== user.id) 
    )}
    

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

           <h2>Lista de Linguagens de programação</h2>
           <ul>
                {listaLinguagens.map((item) =>
                    <li key={item.id}>{item.description}</li>
                )}
           </ul>
               <button onClick={deleteCursos}>Deletar cursos</button>
        </div>
    )
}

export default Testes