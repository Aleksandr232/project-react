import {useState, useEffect} from "react";

export function useDebaunce(value:string, delay: number = 300): string{
    const [debaunced, setDebounced] = useState(value)

    useEffect(()=>{
        const handler = setTimeout(()=>setDebounced(value), delay)
        return()=>clearTimeout(handler)
    },[value, delay])

    return debaunced
}

