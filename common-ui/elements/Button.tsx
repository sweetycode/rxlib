import { cva, type VariantProps } from "class-variance-authority";
import { cx } from "common-utils/cx";
import { cloneElement, toChildArray, type ComponentProps, type VNode } from "preact";


const buttonVariants = cva(`px-4 py-2 text-sm font-medium rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50`, {
    variants: {
        variant: {
            primary: `bg-zinc-900 hover:bg-zinc-900/90 text-white shadow`,
            secondary: ``,
            destructive: ``,
            outline: `border border-zinc-200 hover:bg-zinc-100 shadow-sm`,
            ghost: ``,
            link: `underline-offset-4 hover:underline`,
        },
        size: {

        },
    },
    defaultVariants: {
        variant: 'primary',
    },
})

export type ButtonProps = VariantProps<typeof buttonVariants> & ComponentProps<'button'> & {asChild?: boolean}

export function Button({className, variant, size, asChild, children, ...props}: ButtonProps) {
    const mergedProps = {...props, className: cx(buttonVariants({className, variant, size}))}
    if (asChild) {
        if (children == null || toChildArray(children).length != 1 ) {
            throw Error('The children of `asChild` must be a single vnode.')
        }
        const vnode = toChildArray(children)[0] as VNode
        return cloneElement(vnode, {...vnode.props, ...mergedProps})
    } else {
        return <button {...mergedProps}>{children}</button>
    }
}
