

import { createContext, type ComponentChildren } from "preact"
import { MenuIcon } from "common-icons/icons"
import Button from "common-ui/elements/Button"
import { ccx } from 'common-utils/cx/index';
import { useContext, useRef, useState, type Dispatch, type StateUpdater } from "preact/hooks";
import { useClickAwayWhen } from "react-lib/hooks/events";
import { asComponent, type CcProps } from "common-ui/decl";


const theme = {
    container: ``,
    navbar: `h-full flex items-center gap-4`,
    brand: `flex items-center gap-1`,
    brandIcon: ``,
    brandText: `font-semibold text-xl`,
    menu: (on: boolean) => `gap-1 flex items-center order-2 md:order-1 md:flex-1 max-md:absolute max-md:top-14 max-md:flex-col max-md:bg-white max-md:left-0 max-md:w-full max-md:p-1 max-md:border-b max-md:border-zinc-200 max-md:shadow-sm ${on? 'max-md:flex': 'max-md:hidden'}`,
    menuItem: `text-zinc-500 data-[active=true]:text-zinc-900 hover:bg-zinc-100 font-medium text-sm py-2 px-3 rounded-lg max-md:w-full max-md:text-center`,
    right: `flex items-center order-1 md:order-2 ml-auto`,
    actionIcon: `px-2.5 py-2.5 text-zinc-500`,
    actionButton: ``,
}

interface NavbarContextType {
    open: boolean
    setOpen: Dispatch<StateUpdater<boolean>>
}

const NavbarContext = createContext<NavbarContextType>({open: false, setOpen: ()=>{}})

const Container = asComponent('div', theme.container)

function Navbar({className, children}: CcProps) {
    const [open, setOpen] = useState(false)

    return <nav className={ccx(theme.navbar, className)}>
        <NavbarContext.Provider value={{open, setOpen}}>
            {children}
        </NavbarContext.Provider>
    </nav>
}

function ToggleButton() {
    const {setOpen} = useContext(NavbarContext)
    return <button className="block md:hidden" onClick={() => setOpen(v => !v)}>
        <MenuIcon/>
    </button>
}

const Brand = asComponent<{href: string}>('a', theme.brand, {href: '/'})
const BrandIcon = asComponent('span', theme.brandIcon)
const BrandText = asComponent('span', theme.brandText)


function Menu({className, children}: {className?: string, children: ComponentChildren}) {
    const {open, setOpen} = useContext(NavbarContext)
    const ref = useRef<HTMLDivElement>(null)
    useClickAwayWhen(open, ref, () => setOpen(false))
    return <div className={ccx(theme.menu(open), className)} ref={ref}>
        {children}
    </div>
}

const MenuItem = asComponent<{href: string}>('a', theme.menuItem)
const Right = asComponent('div', theme.right)


function ActionIcon({children, className}: {children: ComponentChildren, className?: string}) {
    return <Button variant="ghost" className={ccx(theme.actionIcon, className)}>
        {children}
    </Button>
}

function ActionButton({className, ...props}: CcProps & {asChild?: boolean}) {
    return <Button variant="ghost" className={ccx(theme.actionButton, className)} {...props}/>
}

export default Object.assign(Navbar, {
    Container,
    ToggleButton,
    Brand,
    BrandIcon,
    BrandText,
    Menu,
    MenuItem,
    Right,
    ActionIcon,
    ActionButton,
})


export interface DemoData {
    brandIcon: ComponentChildren
    brandText: string
    menuItems: string[]
    actionIcon: ComponentChildren
}

function Demo(data: DemoData) {
    return 
    <Container>
        <Navbar>
            <ToggleButton/>
            <Brand href="/">
                <BrandIcon asChild>{data.brandIcon}</BrandIcon>
                <BrandText>{data.brandText}</BrandText>
            </Brand>
            <Menu>
                {data.menuItems.map(item => <MenuItem href="#">{item}</MenuItem>)}
            </Menu>
            <Right>
                <ActionIcon>{data.actionIcon}</ActionIcon>
            </Right>
        </Navbar>
    </Container>
}
