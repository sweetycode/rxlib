import { useEffect, useRef } from "preact/hooks";

// https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/hooks/src/use-click-outside/use-click-outside.ts

export function useClickOutside<T extends HTMLElement = any>(handler: (target: Node) => any, enabled?: () => boolean) {
    const ref = useRef<T>()

    useEffect(() => {
        if (enabled && enabled() == false) {
            return
        }
        function listener(e: UIEvent) {
            const target = e.target as Node
            if (ref.current && !ref.current.contains(target)) {
                handler(target)
            }
        }
        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)
        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [ref, handler])

    return ref
}