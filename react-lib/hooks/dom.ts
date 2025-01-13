import type { RefObject } from "preact"
import { useEffect, useRef } from "preact/hooks"


export function useSetFocus<T extends HTMLElement>(): RefObject<T>{
    const ref = useRef<T>(null)
    useEffect(() => {
        if (ref.current != null) {
            ref.current.focus()
        }
    }, [])
    return ref
}