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

export function SunIcon(props: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...parseIconProps(props)}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
}

export function MoonIcon(props: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...parseIconProps(props)}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
}

export function MenuIcon(props: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...parseIconProps(props)}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
}

export function EllipsisIcon(props: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...parseIconProps(props)}><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
}

export function ChevronLeftIcon(props: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...parseIconProps(props)}><path d="m15 18-6-6 6-6"/></svg>
}

export function ChevronRightIcon(props: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...parseIconProps(props)}><path d="m9 18 6-6-6-6"/></svg>
}
