import type { JSX } from "preact";
import { createPortal } from "preact/compat";

type PortalProps = JSX.HTMLAttributes<HTMLDivElement>

export function Portal({children, ...props}: PortalProps) {
    return createPortal(children, globalThis?.document?.body)
}

export function PortalWhen({on, ...props}: PortalProps&{on?: boolean}) {
    if (on ?? false) {
        return <Portal {...props}/>
    }
    return undefined
}