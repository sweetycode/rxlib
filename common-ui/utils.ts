import { ccx } from "common-utils/cx"
import { cloneElement, h, type ComponentChildren, type VNode } from "preact"


export type CnProps = {className?: string}

export type ChProps<T = ComponentChildren> = {children: T}

export type CcProps<T = ComponentChildren> = CnProps & ChProps<T>


export function defineSC<T = {}>(tag: string, className: string) {
    const baseClassName = className;
    return ({className, asChild, children, ...props}: CcProps & {asChild?: boolean} & T) => {
        if (asChild && children != null) {
            return cloneElement(((children as any)[0] as VNode), {
                ...props,
                className: ccx(baseClassName, className),
            })
        }
        return h(tag, {
            ...props,
            className: ccx(baseClassName, className),
        }, children)
    }
}