

import { createContext, type ComponentChild, type ComponentChildren, type VNode } from "preact"
import { MenuIcon } from "common-icons/icons"
import { Button } from "common-ui/elements/Button"
import { ccx } from 'common-utils/cx/index';
import { useSlots } from "react-lib/hooks/slots";
import { useContext, useRef, useState } from "preact/hooks";
import { useClickAwayWhen } from "react-lib/hooks/events";


function Demo() {
    return <Navbar>
        <NavbarBrand> {/* Optional */}
            {/** icon */}
            {/** text */}
        </NavbarBrand>
        <NavbarMenu> {/* Optional */}
            <NavbarMenuLink href="/">Home</NavbarMenuLink>
            {/* more links */}
        </NavbarMenu>
        <NavbarAction> {/* Optional */}
            <NavbarActionIcon>{/** icon */}</NavbarActionIcon>
        </NavbarAction>
    </Navbar>
}


const theme = {
    height: `3.5em`,
    container: `h-14 block shadow-sm border-b border-zinc-200`,
    navbar: `h-full container mx-auto px-6 flex items-center gap-4`,
    brand: `flex items-center gap-2`,
    menu: (on: boolean) => `gap-1 flex items-center order-2 md:order-1 md:flex-1 max-md:absolute max-md:top-14 max-md:flex-col max-md:bg-white max-md:left-0 max-md:w-full max-md:p-1 max-md:border-b max-md:border-zinc-200 max-md:shadow-sm ${on? 'max-md:flex': 'max-md:hidden'}`,
    menuLink: `text-zinc-500 data-[active=true]:text-zinc-900 hover:bg-zinc-100 font-medium text-sm py-2 px-3 rounded-lg max-md:w-full max-md:text-center`,
    action: `flex items-center order-1 md:order-2 ml-auto`,
}

interface NavbarContextType {
    open: boolean
    setOpen: (open: boolean) => void
}

const NavbarContext = createContext<NavbarContextType>({open: false, setOpen: ()=>{}})


export function Navbar({className, containerClassName, children}: {className?: string, containerClassName?: string, children: VNode<unknown>[]}) {
    const [open, setOpen] = useState(false)

    const {NavbarBrand: brand, NavbarMenu: menu, NavbarAction: action} = useSlots(children, [children])

    return <nav className={ccx(theme.container, containerClassName)}>
        <div className={ccx(theme.navbar, className)}>
            {menu && <ToggleButton toggle={() => setOpen(value => !value)}/>}
            <NavbarContext.Provider value={{open, setOpen}}>
                {brand}
                {menu}
                {action}
            </NavbarContext.Provider>
        </div>
    </nav>
}

function ToggleButton({toggle}: {toggle: () => void}) {
    return <button className="block md:hidden" onClick={toggle}>
        <MenuIcon/>
    </button>
}

export function NavbarBrand({className, children}: {className?: string, children?: ComponentChild}) {
    return <a href="/" className={ccx(theme.brand, className)}>
        {children}
    </a>
}


export function NavbarMenu({className, children}: {className?: string, children: ComponentChildren}) {
    const {open, setOpen} = useContext(NavbarContext)
    const ref = useRef<HTMLDivElement>(null)
    useClickAwayWhen(open, ref, () => setOpen(false))
    return <div className={ccx(theme.menu(open), className)} ref={ref}>
        {children}
    </div>
}

export function NavbarMenuLink({className, href, children}: {className?: string, href: string, children: ComponentChildren}) {
    return <a href={href} className={ccx(theme.menuLink, className)}>{children}</a>
}

export function NavbarAction({className, children}: {className?: string, children: ComponentChildren}) {
    return <div className={ccx(theme.action, className)}>
        {children}
    </div>
}


export function NavbarActionIcon({children, className}: {children: ComponentChildren, className?: string}) {
    return <Button variant="ghost" className={ccx('px-2.5 py-2.5 text-zinc-500', className)}>
        {children}
    </Button>
}


