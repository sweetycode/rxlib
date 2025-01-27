import { asComponent } from "common-ui/decl"

const styles = {
    footer01: `mt-8 text-zinc-500 text-sm`,
    container: `max-w-screen-lg mx-auto py-6 space-y-5`,

    brand: `flex items-center justify-center space-x-1 opacity-50 hover:opacity-90 transition-all`,
    brandLogo: `size-7`,
    brandTitle: `text-xl font-semibold text-zinc-900`,

    nav: `flex items-center justify-center space-x-5`,
    navItem: `hover:text-zinc-900 hover:underline`,

    copyRight: `flex justify-center`,
    copyRightLink: `underline hover:text-zinc-900`
}

const Footer01 = asComponent('div', styles.footer01)
const Container = asComponent('div', styles.container)

const Brand = asComponent('div', styles.brand)
const BrandLogo = asComponent<{src: string}>('img', styles.brandLogo)
const BrandTitle = asComponent('div', styles.brandTitle)

const Nav = asComponent('div', styles.nav)
const NavItem = asComponent<{href: string}>('a', styles.navItem)

const Copyright = asComponent('div', styles.copyRight)
const CopyrightLink = asComponent<{href: string}>('a', styles.copyRightLink)

export default Object.assign(Footer01, {
    Container,
    Brand,
    BrandLogo,
    BrandTitle,
    Nav,
    NavItem,
    Copyright,
    CopyrightLink
})
