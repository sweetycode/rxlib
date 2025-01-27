import { ccx } from 'common-utils/cx';
import { h, type ComponentChildren, type FunctionComponent, type RenderableProps, type VNode, toChildArray, type ComponentProps, type Ref } from 'preact';
import { forwardRef, type PropsWithoutRef } from 'preact/compat';

export type CnProps<P = {}> = {className?: string} & P

export type CcProps<P = {}> = CnProps<{children?: ComponentChildren}> & P


export function asComponent<P extends {} = {}>(type: string, style?: string, defaultProps: Partial<P> = {}): FunctionComponent<PropsWithoutRef<P & CnProps> & {ref?: Ref<any>}> {
    return forwardRef(({className, ...props}: P & CnProps, ref) => {
        return h(type, {
            ...defaultProps,
            ...props,
            ref,
            className: ccx(style, className as string),
        })
    })
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