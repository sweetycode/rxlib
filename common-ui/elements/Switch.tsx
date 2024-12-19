import { cx } from "common-utils/cx";
import type { ComponentProps } from "preact";
import { cn } from '../../common-utils/cx/index';

type SwitchProps = {
    checked?: boolean
    className?: string
    onChackedChange?: (checked: boolean) => void
} & ComponentProps<'button'>

export default function Switch({className, checked, onChackedChange, ...props}: SwitchProps) {
    const buttonClassName = checked? `bg-zinc-900`: `bg-zinc-200`
    const spanClassName = checked? `translate-x-4`: `translate-x-0`
    return <button role="switch" aria-checked={checked} onClick={onChackedChange == null ? undefined: () => onChackedChange(!checked)}
        className={cx(`peer inline-flex items-center shrink-0 h-5 w-9 rounded-full shadow-sm transition-colors border-2 border-transparent`, buttonClassName, className)}
        {...props}>
            <span className={cn(`pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg transition-transform`, spanClassName)}></span>
    </button>
}