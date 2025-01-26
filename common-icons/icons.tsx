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

export function HomeIcon(props: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...parseIconProps(props)}><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
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


export function CircleCheckIcon(props: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...parseIconProps(props)}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
}

export function WrapTextIcon(props: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...parseIconProps(props)}><line x1="3" x2="21" y1="6" y2="6"/><path d="M3 12h15a3 3 0 1 1 0 6h-4"/><polyline points="16 16 14 18 16 20"/><line x1="3" x2="10" y1="18" y2="18"/></svg>
}

export function BracesIcon(props: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...parseIconProps(props)}><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/></svg>
}

export function ClockIcon(props: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...parseIconProps(props)}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}

export function DiffTextIcon(props: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...parseIconProps(props)}><circle cx="5" cy="6" r="3"/><path d="M12 6h5a2 2 0 0 1 2 2v7"/><path d="m15 9-3-3 3-3"/><circle cx="19" cy="18" r="3"/><path d="M12 18H7a2 2 0 0 1-2-2V9"/><path d="m9 15 3 3-3 3"/></svg>
}

export function LinkIcon(props: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...parseIconProps(props)}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
}

export function Base64Icon(props: IconProps) {
    return <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" {...parseIconProps(props)}><path d="M0 512a512 512 0 1 0 1024 0A512 512 0 1 0 0 512z" fill="currentColor"></path><path d="M227.346 811.081h69.486a175.36 175.36 0 0 0 48-4.132 28.946 28.946 0 0 0 17.079-15.452 85.211 85.211 0 0 0 5.358-34.743v-21.449a60.343 60.343 0 0 0-7.424-33.518 44.507 44.507 0 0 0-28.288-15.652 44.38 44.38 0 0 0 25.07-12.27 46.793 46.793 0 0 0 6.363-28.27 80.457 80.457 0 0 0-9.015-43.465 42.679 42.679 0 0 0-23.625-17.92 157.934 157.934 0 0 0-43.081-4.425h-59.996v231.278z m72.631-190.427a9.582 9.582 0 0 1 5.23 5.485 40.667 40.667 0 0 1 1.993 15.214 71.04 71.04 0 0 1-2.432 24.924 11.904 11.904 0 0 1-11.282 4.37c-1.427 0-3.438 0-5.998 0.128v-51.42a46.72 46.72 0 0 1 12.49 1.299z m4.078 89.71a30.446 30.446 0 0 1 3.145 18.01v21.56a28.105 28.105 0 0 1-3.493 17.572 25.6 25.6 0 0 1-16.219 4.005v-64.713a28.361 28.361 0 0 1 16.567 3.565z m143.561-35.274a77.294 77.294 0 0 1 1.426-19.657 6.857 6.857 0 0 1 7.315-3.785 7.589 7.589 0 0 1 7.314 4.517 52.827 52.827 0 0 1 2.212 19.346 39.918 39.918 0 0 1-1.993 15.726 95.36 95.36 0 0 1-30.427 14.994 94.464 94.464 0 0 0-33.28 17.993 45.605 45.605 0 0 0-6.73 29.001v15.58a42.734 42.734 0 0 0 12.654 37.211 48.713 48.713 0 0 0 27.776 8.503 35.2 35.2 0 0 0 33.573-20.334v16.896h56.155v-95.086a399.214 399.214 0 0 0-2.998-62.061 40.393 40.393 0 0 0-17.866-25.436 95.086 95.086 0 0 0-83.858-1.207 47.05 47.05 0 0 0-20.352 21.066 89.6 89.6 0 0 0-5.083 33.92v12.8h54.144v-19.859z m18.286 84.846a54.857 54.857 0 0 1-1.628 17.646 7.077 7.077 0 0 1-7.076 3.364 7.515 7.515 0 0 1-7.644-4.297 57.435 57.435 0 0 1-1.938-18.999 68.041 68.041 0 0 1 2.213-19.712 42.77 42.77 0 0 1 16.073-16.987v38.985z m200.137-88.85a105.106 105.106 0 0 0-1.5-20.992 33.865 33.865 0 0 0-8.557-14.629 49.371 49.371 0 0 0-20.297-12.654 94.848 94.848 0 0 0-32.074-4.772 87.771 87.771 0 0 0-33.353 5.851 38.967 38.967 0 0 0-20.352 16.64 71.515 71.515 0 0 0-5.997 33.5 63.58 63.58 0 0 0 5.485 27.648 74.496 74.496 0 0 0 31.086 25.929 265.765 265.765 0 0 1 33.573 20.279 28.891 28.891 0 0 1 3.126 17.005 23.077 23.077 0 0 1-2.413 12.928 10.368 10.368 0 0 1-8.576 3.072 7.479 7.479 0 0 1-7.644-4.571 63.269 63.269 0 0 1-1.938-19.858v-11.996h-51.2v9.143a82.286 82.286 0 0 0 5.851 35.42 41.051 41.051 0 0 0 21.504 18.578 93.349 93.349 0 0 0 37.632 6.857 82.011 82.011 0 0 0 33.939-6.363 39.79 39.79 0 0 0 20.114-18.14 79.451 79.451 0 0 0 6.016-34.926 53.54 53.54 0 0 0-7.863-31.579 90.807 90.807 0 0 0-33.006-23.131 159.086 159.086 0 0 1-24.923-14.154 20.315 20.315 0 0 1-7.314-8.923 49.097 49.097 0 0 1-1.207-12.8 15.854 15.854 0 0 1 2.432-9.655 8.54 8.54 0 0 1 7.314-3.218 7.314 7.314 0 0 1 7.497 3.51 54.601 54.601 0 0 1 1.5 16.64v10.332h51.2v-10.971zM831.03 694.51a114.523 114.523 0 0 0-6.345-42.789 50.816 50.816 0 0 0-22.144-24.43 78.629 78.629 0 0 0-40.083-9.142 77.623 77.623 0 0 0-35.126 7.625 46.117 46.117 0 0 0-21.943 21.943 94.318 94.318 0 0 0-6.711 39.204v55.296a131.218 131.218 0 0 0 2.999 32.201 52.535 52.535 0 0 0 10.788 20.297 51.712 51.712 0 0 0 21.797 14.501 91.246 91.246 0 0 0 32.274 5.285 80.018 80.018 0 0 0 31.36-5.358 50.615 50.615 0 0 0 20.645-16.073 54.73 54.73 0 0 0 10.35-20.115 124.965 124.965 0 0 0 2.212-26.99V731.96h-54.71v25.07a53.742 53.742 0 0 1-2.213 19.072 8.667 8.667 0 0 1-8.778 4.937 7.314 7.314 0 0 1-7.15-3.657 45.586 45.586 0 0 1-1.828-16.586V719.8h74.697v-25.143z m-74.697-5.705v-13.861a75.886 75.886 0 0 1 1.426-19.639 7.003 7.003 0 0 1 7.424-3.657 6.217 6.217 0 0 1 6.418 4.297 69.285 69.285 0 0 1 1.573 18.999v13.86h-16.841z m9.162-232.795h-26.478v46.847H675.42v-46.793H539.154v-52.645l103.991-204.342h71.973l-101.23 201.819h61.531v-76.8h63.598v76.8h26.478v55.168z m-321.06 38.856a137.307 137.307 0 0 1-106.79 0.11 75.703 75.703 0 0 1-33.773-31.342 99.547 99.547 0 0 1-11.611-49.627v-0.201a146.066 146.066 0 0 1 4.534-34.89 216.265 216.265 0 0 1 12.8-36.991c0.915-2.085 1.829-4.17 2.89-6.254s2.048-4.114 3.145-6.071l68.48-130.78h71.954l-66.578 124.471a68.974 68.974 0 0 1 12.452-1.206 98.743 98.743 0 0 1 47.543 10.66 70.71 70.71 0 0 1 30.062 31.086 107.21 107.21 0 0 1 10.331 49.006v0.2a101.723 101.723 0 0 1-11.611 50.14 75.685 75.685 0 0 1-33.829 31.69z m-18.286-78.628a41.728 41.728 0 0 0-9.143-28.947 33.426 33.426 0 0 0-26.112-10.13A32.914 32.914 0 0 0 365 387.511a42.057 42.057 0 0 0-9.143 28.928v0.22A33.097 33.097 0 0 0 365 441.728a42.697 42.697 0 0 0 52.005-0.11 33.463 33.463 0 0 0 9.143-25.18v-0.2z" fill="#FFFFFF" p-id="6305"></path></svg>
}