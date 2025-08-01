import { useState, useEffect, useImperativeHandle, useRef } from "react"
import SomeComponent from "./SomeComponent"

const HookUseImperativeHandle = () => {

    const inputRef = useRef()

  return (

    <div>
        <h2>UseImperativeHandle</h2>
        <SomeComponent ref={inputRef}/>
        <button onClick={() => inputRef.current.validate()}>Validate</button>
        <hr />
    </div>

  )
}

export default HookUseImperativeHandle