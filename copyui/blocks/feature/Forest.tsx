import { type ComponentChildren } from "preact";
import { defineSC } from "common-ui/utils";

/**
 * https://www.shadcnblocks.com/block/feature15
 */


const theme = {
    feature: `space-y-16`,
    hero: `md:max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 space-y-4 md:space-y-6`,
    subTitle: `text-zinc-500 text-sm`,
    title: `text-3xl font-medium md:text-5xl`,
    description: `md:max-w-2xl text-zinc-500`,
    cardList: `max-w-5xl mx-auto grid md:grid-cols-2 gap-6`,
    card: `rounded-lg bg-zinc-100 p-6 md:p-8 space-y-2`,
    cardIcon: `inline-flex size-11 items-center adjust-center bg-white p-3 rounded-full mb-2`,
    cardTitle: `text-lg md:text-2xl font-medium`,
    cardDescription: `text-zinc-500`,
}


const Feature = defineSC('div', theme.feature)
const Hero = defineSC('div', theme.hero)
const Title = defineSC('h2', theme.title)
const SubTitle = defineSC('p', theme.subTitle)
const Description = defineSC('p', theme.description)
const CardList = defineSC('div', theme.cardList)
const Card = defineSC('div', theme.card)
const CardIcon = defineSC('div', theme.cardIcon)
const CardTitle = defineSC('div', theme.cardTitle)
const CardDescription = defineSC('div', theme.cardDescription)


export default Object.assign(Feature, {
    Hero,
    Title,
    SubTitle,
    Description,
    CardList,
    Card,
    CardIcon,
    CardTitle,
    CardDescription,
})

export interface DemoData {
    title: string
    subTitle: string
    description: string
    cardList: {
        icon: ComponentChildren,
        title: string,
        description: string,
    }[]
}

export function Demo({title, subTitle, description, cardList}: DemoData) {
    return <Feature>
        <Hero>
            <SubTitle>{subTitle}</SubTitle>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Hero>
        <CardList>
            {cardList.map(({icon, title, description}) => (<Card>
                <CardIcon>{icon}</CardIcon>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </Card>))}
        </CardList>
    </Feature>
}
