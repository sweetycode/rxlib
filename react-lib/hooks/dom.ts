import type { RefObject } from "preact"
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';


export function useSetFocus<T extends HTMLElement>(): RefObject<T>{
    const ref = useRef<T>(null)
    useEffect(() => {
        if (ref.current != null) {
            ref.current.focus()
        }
    }, [])
    return ref
}

export function useFullscreen(): {ref: any, toggle: () => void, fullscreen: boolean} {
    const ref = useRef()
    const [fullscreen, setFullscreen] = useState(false)
    const toggle = useCallback(() => {
        
    }, [])

    return {ref, toggle, fullscreen}
}
