import { useState, useEffect, useRef } from "react"

const HookUseRef = () => {
    // 1 - userRef
    const numberRef = useRef(0)
    const [counter, setConuter] = useState(0)
    const [counterB, setConuterB] = useState(0)

    useEffect(() => {
        numberRef.current++  
    })

    // 2 - useRef e DOM
    const inputRef = useRef()
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        setText("")
        inputRef.current.focus()
    }

  return (

    <div>
        <h2>UseRef</h2>
        {/* 1 - useRef */}
        <p>O componente renderizou: {numberRef.current} vezes</p>
        <p>Counter 1: {counter}</p>
        <button onClick={() => setConuter(counter + 1)}>Contador A</button>
        <p>Counter 2: {counterB}</p>
        <button onClick={() => setConuterB(counterB + 1)}>Contador B</button>
        {/* 2 - useRef e DOM */}
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" value="Enviar"/>
        </form>
        <hr />
    </div>

  )
}

export default HookUseRef