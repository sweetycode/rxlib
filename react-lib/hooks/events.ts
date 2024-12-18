import type { RefObject } from "preact";
import { useEffect } from "preact/hooks";

export function useClickAwayWhen(enable: boolean, ref: RefObject<HTMLElement>, callback: (target: Node) => any) {
    useEffect(() => {
        if (!enable) {
            return
        }

        function handler(e: UIEvent) {
            console.log('click away')
            const target = e.target as Node
            if (ref.current && !ref.current.contains(target)) {
                callback(target)
            }
        }
        document.addEventListener('mousedown', handler)
        document.addEventListener('touchstart', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
            document.removeEventListener('touchstart', handler)
        }
    }, [enable, callback, ref.current])
}