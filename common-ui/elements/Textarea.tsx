import type { ComponentProps } from "preact";
import { cx } from '../../common-utils/cx/index';

type TextareaProps = ComponentProps<'textarea'>

export function Textarea({className, ...props}: TextareaProps) {
    return <textarea className={cx('flex min-h-[60px] w-full rounded-md md:text-sm border border-zinc-200 px-3 py-2 shadown-sm placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:cursor-not-allowed disabled:opacity-50', className)} {...props}></textarea>
}