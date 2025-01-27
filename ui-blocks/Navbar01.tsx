import { asComponent, type CnProps } from "common-ui/decl"
import type { ComponentProps } from "preact"
import { SearchIcon } from "common-icons/icons";
import { ccx } from '../common-utils/cx/index';

const styles = {
    navbar01: `border-b border-zinc-200 shadow-sm`,
    container: `max-w-screen-lg h-12 mx-auto flex justify-between items-center`,

    brand: `flex items-center space-x-1`,
    brandLogo: `size-7`,
    brandTitle: `text-xl font-semibold`,

    nav: ``,
    navItem: ``,

    action: `flex items-center space-x-1`,
    actionButton: ``,
    actionSearch: `px-4 h-9 flex items-center transition-all border border-zinc-200 rounded-md text-sm text-zinc-500 hover:border-zinc-300 hover:text-zinc-900 hover:bg-zinc-100`,
    actionIcon: ``,
}


const Navbar01 = asComponent('div', styles.navbar01)
const Container = asComponent('div', styles.container)

const Brand = asComponent<{href?: string}>('a', styles.brand, {href: '/'})
const BrandLogo = asComponent<ComponentProps<'img'>>('img', styles.brandLogo)
const BrandTitle = asComponent('h3', styles.brandTitle)

const Nav = asComponent('nav', styles.nav)
const NavItem = asComponent<{href?: string}>('a', styles.navItem)

const Action = asComponent('div', styles.action)
const ActionButton = asComponent('button', styles.actionButton)
function ActionSearch({className, children, ...props}: ComponentProps<'button'>&CnProps) {
    return <button {...props} className={ccx(styles.actionSearch, className)}>
        <SearchIcon size="20"/>
        <span className="mx-1">{children}</span>
        <kbd className="border-zinc-200/80 border rounded px-1 py-0.5 text-xs ml-4 bg-zinc-50"><span className="mr-0.5">⌘</span>K</kbd>
    </button>
}
const ActionIcon = asComponent('svg', styles.actionIcon)

export default Object.assign(Navbar01, {
    Container,

    Brand,
    BrandLogo,
    BrandTitle,

    Nav,
    NavItem,

    Action,
    ActionButton,
    ActionSearch,
    ActionIcon,
})


interface Navbar01ExampleProps {
    brand: {
        logo: string
        title: string,
    },
    nav: {
        items: {
            href: string
            label: string
        }[]
    },
}

export function Navbar01Example({brand, nav}: Navbar01ExampleProps) {
    return <Navbar01>
        <Container>
            <Brand>
                <BrandLogo src={brand.logo} />
                <BrandTitle>{brand.title}</BrandTitle>
            </Brand>
            <Nav>
                {nav.items.map(({href, label}) => <NavItem href={href}>{label}</NavItem>)}
            </Nav>
            <Action>
                <ActionButton>
                    <SearchIcon/>
                </ActionButton>
                <ActionSearch/>
            </Action>
        </Container>
    </Navbar01>
}

