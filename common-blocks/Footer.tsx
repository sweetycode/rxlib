import { asComponent, wrapWith } from "common-ui/decl"
import type { ComponentChildren } from "preact";

// see: https://www.shadcnblocks.com/preview/footer7/

const theme = {
    footer: `text-zinc-500 text-sm`,
    main: `flex justify-between space-x-40`,
    legal: `flex justify-between border-t border-zinc-200 mt-16 pt-10 font-medium`,
    hero: `flex-1 space-y-4`,
    nav: `flex flex-1 justify-between`,

    heading: `flex gap-x-4 items-center`,
    logo: ``,
    title: `text-3xl font-semibold text-zinc-900`,
    description: ``,
    iconLinks: `flex gap-x-4`,
    iconLink: `hover:text-zinc-900`,

    navLinks: `space-y-4`,
    navLinksName: `text-base text-zinc-900 font-bold`,
    navLinkList: `space-y-3`,
    navLinkItem: `font-medium hover:text-zinc-900`,

    legalDeclare: ``,
    legalLinkList: `flex space-x-6`,
    legalLinkItem: `hover:text-zinc-900`,
}


const Footer = asComponent('div', theme.footer)
const Main = asComponent('div', theme.main)
const Hero = asComponent('div', theme.hero)
const Heading = asComponent('div', theme.heading)
const Logo = asComponent('div', theme.logo)
const Title = asComponent('div', theme.title)
const Description = asComponent('div', theme.description)
const IconLinks = asComponent('div', theme.iconLinks)
const IconLink = asComponent<{href: string}>('a', theme.iconLink)
const Nav = asComponent('div', theme.nav)
const NavLinks = asComponent('div', theme.navLinks)
const NavLinksName = asComponent('div', theme.navLinksName)
const NavLinkList = asComponent('ul', theme.navLinkList)
const NavLinkItem = wrapWith('li', {}, asComponent<{href: string}>('a', theme.navLinkItem))
const Legal = asComponent('div', theme.legal)
const LegalDeclare = asComponent('div', theme.legalDeclare)
const LegalLinkList = asComponent('ul', theme.legalLinkList)
const LegalLinkItem = wrapWith('li', {}, asComponent<{href: string}>('a', theme.legalLinkItem))


export default Object.assign(Footer, {
    Main,
    Hero,
    Heading,
    Logo,
    Title,
    Description,
    IconLinks,
    IconLink,
    Nav,
    NavLinks,
    NavLinksName,
    NavLinkList,
    NavLinkItem,
    Legal,
    LegalDeclare,
    LegalLinkList,
    LegalLinkItem,
})


export interface DemoData {
    logo: ComponentChildren
    title: string
    description: string
    icons: ComponentChildren[]
    navLinks: {
        name: string,
        links: string[]
    }[]
    legalDeclare: string
    legalLinks: string[]
}


export function Demo(data: DemoData) {
    return <Footer>
        <Main>
            <Hero>
                <Heading>
                    <Logo>{data.logo}</Logo>
                    <Title>{data.title}</Title>
                </Heading>
                <Description>{data.description}</Description>
                <IconLinks>
                    {data.icons.map(icon => <IconLink href="#">{icon}</IconLink>)}
                </IconLinks>
            </Hero>
            <Nav>
                {data.navLinks.map(({name, links}) => <NavLinks>
                    <NavLinksName>{name}</NavLinksName>
                    <NavLinkList>
                        {links.map(link => <NavLinkItem href="#">{link}</NavLinkItem>)}
                    </NavLinkList>
                </NavLinks>)}
            </Nav>
        </Main>
        <Legal>
            <LegalDeclare>{data.legalDeclare}</LegalDeclare>
            <LegalLinkList>
                {data.legalLinks.map(link => <LegalLinkItem href="#">{link}</LegalLinkItem>)}
            </LegalLinkList>
        </Legal>
    </Footer>
}
