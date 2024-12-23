
// https://ui.shadcn.com/docs/components/card

import { asComponent } from "common-ui/decl"

const theme = {
    container: ``,
    header: ``,
    title: ``,
    description: ``,
    content: ``,
    footer: ``,
}

const Card = asComponent('div', theme.container)
const Header = asComponent('div', theme.header)
const Title = asComponent('div', theme.title)
const Description = asComponent('p', theme.description)
const Content = asComponent('div', theme.content)
const Footer = asComponent('div', theme.footer)

export default Object.assign(Card, {
    Header,
    Title,
    Description,
    Content,
    Footer,
})

export function Demo() {
    return <Card>
        <Header>
            <Title>Title</Title>
            <Description>Description</Description>
        </Header>
        <Content>
            Content
        </Content>
        <Footer>
            Footer
        </Footer>
    </Card>
}
