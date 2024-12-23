import { defineSC } from "common-ui/utils"

const theme = {
    list: ``,
    item: ``,
    link: ``,
}

const List = defineSC('ul', theme.list)
const Item = defineSC('li', theme.item)
const Link = defineSC<{href?: string}>('a', theme.link)


export default Object.assign(List, {
    List,
    Item,
    Link,
})


export function Demo() {
    return <List>
        <Item>
            <Link href="#">Item1</Link>
        </Item>
        <Item>
            <Link href="#">Item2</Link>
        </Item>
        <Item>
            <Link href="#">Item3</Link>
            <List>
                <Item>
                    <Link href="#">SubItem1</Link>
                </Item>
                <Item>
                    <Link href="#">SubItem2</Link>
                </Item>
            </List>
        </Item>
        <Item>
            <Link href="#">Item4</Link>
        </Item>
    </List>
}


