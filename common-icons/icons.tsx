import { cx } from "common-utils/cx"

interface IconProps {
    size?: string
    className?: string
}

function parseIconProps({size, className}: IconProps): {width: string, height: string, className?: string} {
    return {
        width: size ?? '24',
        height: size ?? '24',
        className: cx('inline', className),
    }
}

export function SearchIcon(props: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...parseIconProps(props)}>
        <circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path>
    </svg>
}