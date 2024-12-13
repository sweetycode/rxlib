import { cloneElement, type ComponentChild, type Ref, type VNode } from "preact";

interface SlotCloneProps {
    target: VNode<any>,
    ref?: Ref<unknown>,
    onClick?: () => any,
}

export function SlotClone({target, ...props}: SlotCloneProps) {
    return cloneElement(target, {
        ...target.props,
        ...props,
    })
}