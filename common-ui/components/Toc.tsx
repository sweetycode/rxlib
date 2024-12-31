import { asComponent } from "common-ui/decl"

const theme = {
    toc: `space-y-4 text-sm`,
    title: `font-medium`,
    list: `space-y-2 mt-2`,
    item: ``,
    link: `text-zinc-500 hover:text-zinc-900`,
}


const Toc = asComponent('div', theme.toc)
const Title = asComponent('div', theme.title)
const List = asComponent('ul', theme.list)
const Item = asComponent('li', theme.item)
const Link = asComponent<{href: string}>('a', theme.link)

export default Object.assign(Toc, {
    Title, 
    List,
    Item,
    Link,
})


export interface DemoData {
    title: string
    list: {link: string, list: string[]}[]
}

export function Demo(data: DemoData) {
    return <Toc>
        <Title>{data.title}</Title>
        <List>
            {data.list.map(({link, list}) => <Item>
                <Link href="#">{link}</Link>
                {list && <List>
                    {list.map(item => <Item><Link href="#">{item}</Link></Item>)}
                </List>}
            </Item>)}
        </List>
    </Toc>
}