import { ccx } from 'common-utils/cx';
import { cloneElement, h, type ComponentChildren, type FunctionComponent, type RenderableProps, type VNode, toChildArray } from 'preact';

export type CnProps<P = {}> = {className?: string} & P

export type CcProps<P = {}> = CnProps<{children?: ComponentChildren}> & P


export function asComponent<P>(tag: string, className?: string): FunctionComponent<CnProps<P&{asChild?: boolean}>> {
    return ({asChild, children, ...props}: RenderableProps<CnProps<P&{asChild?: boolean}>>) => {
        return asChild ? cloneElement(getOnlyChild(children), prependClassName(props, className))
            : h(tag, prependClassName(props, className), children)
    }
}

export function wrapWith<W extends {}, P = {}>(tag: string, wrapProps: W, fn: FunctionComponent<P>): FunctionComponent<P> {
    return (props: RenderableProps<P>) => h(tag, wrapProps, h(fn, props))
}

export function prependClassName<P extends {className?: string}>(props: P, className?: string): P {
    return {
        ...props,
        className: ccx(className, props.className)
    }
}

export function appendClassName<P extends {className?: string}>(props: P, className?: string): P {
    return {
        ...props,
        className: ccx(props.className, className)
    }
}

export function getOnlyChild(children: ComponentChildren): VNode {
    const arr = toChildArray(children)
    if (arr.length != 1) {
        throw new Error('Expected exactly one child')
    }
    return arr[0] as VNode
}