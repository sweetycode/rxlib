import { asComponent } from "common-ui/decl"
import type { ComponentChild } from "preact"


const theme = {
    feature: `flex max-md:flex-col-reverse items-center gap-10`,
    column: ``,
    icon: ``,
    title: ``,
    description: ``,
    action: ``,
    button: ``,
    bulletList: ``,
    bulletItem: ``,
    bulletItemIcon: ``,
    bulletItemText: ``,
    card: `md:w-1/2 flex-none`,
    cardIcon: ``,
}

const Feature = asComponent('div', theme.feature)
const Column = asComponent('div', theme.column)
const Icon = asComponent('div', theme.icon)
const Title = asComponent('div', theme.title)
const Description = asComponent('div', theme.description)
const Action = asComponent('div', theme.action)
const Button = asComponent('button', theme.button)
const BulletList = asComponent('ul', theme.bulletList)
const BulletItem = asComponent('li', theme.bulletItem)
const BulletItemIcon = asComponent('span', theme.bulletItemIcon)
const BulletItemText = asComponent('span', theme.bulletItemText)
const Card = asComponent('div', theme.card)
const CardIcon = asComponent('span', theme.cardIcon)

export default Object.assign(Feature, {
    Column,
    Icon,
    Title,
    Description,
    Action,
    Button,
    BulletList,
    BulletItem,
    BulletItemIcon,
    BulletItemText,
    Card,
    CardIcon
})


export interface DemoData {
    icon: ComponentChild,
    title: string,
    description: string,
    button: string,
    bulletList: {
        icon: ComponentChild,
        text: string,
    }[],
    cardIcon: ComponentChild,
}

export function Demo(data: DemoData) {
    return <Feature>
        <Column>
            <Icon>{data.icon}</Icon>
            <Title>{data.title}</Title>
            <Description>{data.description}</Description>
            <Action>
                <Button>{data.button}</Button>
            </Action>
            <BulletList>
                {data.bulletList.map(({icon, text}) => <BulletItem>
                    <BulletItemIcon>{icon}</BulletItemIcon>
                    <BulletItemText>{text}</BulletItemText>
                </BulletItem>)}
            </BulletList>
        </Column>
        <Card>
            <CardIcon>{data.cardIcon}</CardIcon>
        </Card>
    </Feature>
}
