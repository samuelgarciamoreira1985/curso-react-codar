import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Matheus","Pedro","Josias"])

    const [users,setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "Pedro", age: 20},
        {id: 3, name: "João", age: 19}
    ])

    const deleteRamdom = () => {
        const ramdomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUser) =>
            prevUser.filter((user) => ramdomNumber !== user.id)
        )
    }

  return (
    <div>
        {/*Render sem Key*/}
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
        {/*Render com Key*/}
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        {/*Previous State*/}
        <button onClick={deleteRamdom}>Delete</button>
    </div>
  )
}

export default ListRender