import { toChildArray, type ComponentChildren, type VNode } from "preact";
import { useMemo, type Inputs } from "preact/hooks";

function getComponentName(component: VNode): string {
    const type = component.type
    return typeof type === 'string'? type: (type.displayName ?? type.name)
}


function getSlots(children: ComponentChildren): Record<string, VNode> {
    const result: Record<string, VNode> = {}
    toChildArray(children).forEach((child) => {
        if (typeof child === 'string' || typeof child === 'number') {
            throw new Error(`invalid child type of ${child}`)
        }
        const type = getComponentName(child)
        result[type] = child
    });
    return result
}

export function useSlots(children: ComponentChildren, inputs: Inputs): Record<string, VNode> {
    return useMemo(() => getSlots(children), inputs)
}