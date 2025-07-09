import { useState } from "react";

const Produtos = () => {

     const [users,setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "Pedro", age: 20},
        {id: 3, name: "João", age: 19}
    ])

    const deleteUser = () => {
        const numeroAle = Math.floor(Math.random() * 4)
        setUsers((preEstado) =>
        preEstado.filter((user) => numeroAle !== user.id)
        )
    }

    return (
        <div>
            <ul>
                {users.map((item) => 
                    <li key={item.id}>{item.name} - {item.age}</li>
                )}
            </ul>
           <button onClick={deleteUser}>Deletar usuário</button>
        </div>
    )
}

export default Produtos