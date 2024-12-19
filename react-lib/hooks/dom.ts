import { useEffect } from "preact/hooks"


/**
 * TODO: idemopotence
 */
export function useInsertStyle(style: string) {
    useEffect(() => {
        const el = document.createElement('style')
        el.innerHTML = style
        document.head.appendChild(el)
        return () => el.remove()
    }, [style])
}
