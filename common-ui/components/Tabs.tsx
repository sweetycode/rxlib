import { defineSC, type CcProps } from "common-ui/utils"
import { ccx } from "common-utils/cx"

const theme = {
    container: ``,
    list: ``,
    trigger: ``,
    content: ``,
}

const Tabs = defineSC('div', theme.container)
const List = defineSC('ul', theme.list)
function Trigger({className, ...props}: CcProps) {
    return <li><button className={ccx(theme.trigger, className)} {...props}/></li>
}
const Content = defineSC('div', theme.content)


export default Object.assign(Tabs, {
    List,
    Trigger,
    Content,
})

export function Demo() {
    return <Tabs>
        <List>
            <Trigger>Tab1</Trigger>
            <Trigger>Tab2</Trigger>
            <Trigger>Tab3</Trigger>
        </List>
        <Content>
            Content1
        </Content>
    </Tabs>
}