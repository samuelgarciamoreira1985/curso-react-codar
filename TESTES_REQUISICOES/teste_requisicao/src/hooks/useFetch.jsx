import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState(null)

    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)

    const httpSettings = (data, method) => {
        if (method === "POST") {
            setConfig({
                method: "POST",
                Headers: {"Content-Type":"application/json"},
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
    }

    // Get...
    useEffect(() => {
        const getGames = async () => {
            const request = await fetch(url)
            const response = await request.json()
            setData(response)
        }
        getGames()
    },[url,callFetch])// Fim Get...

    //POST
    useEffect(() => {
        const httpPOSt = async () => {
        let json
        if (method === "POST") {
            let fetchOptions = [url, config]
            const res = await fetch(...fetchOptions)
            json = await res.json()
        }
        setCallFetch(json)
        }
        httpPOSt()
    },[config, method, url])

    return { data, httpSettings }
}