

// https://www.shadcnblocks.com/preview/hero12/

import { asComponent } from "common-ui/decl"
import type { ComponentProps, ComponentChildren } from "preact"
import { CnProps } from '../common-ui/decl';
import { LightBlueBackground } from "./Background";
import { ccx } from "common-utils/cx";

const theme = {
    hero: `container mx-auto text-center space-y-6`,
    background: ``,
    logo: `flex justify-center`,
    title: `text-2xl font-bold lg:text-5xl text-pretty`,
    subTitle: ``,
    description: `text-xl text-zinc-500`,
    actions: `my-8 flex items-center justify-center space-x-4 text-sm font-medium`,
    primaryButton: `px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-900/90 text-white`,
    secondaryButton: `px-5 py-2.5 rounded-lg border border-zinc-200 hover:bg-zinc-100`,

    addition: `text-zinc-500 pt-12 space-y-4`,
    additionTitle: ``,
    additionIconList: `flex items-center justify-center space-x-4`,
    additionIconLink: `hover:text-zinc-900`,
}

const Hero = asComponent('div', theme.hero)
const Background = ({className}: CnProps) => {
    return <LightBlueBackground className={ccx(`absolute top-0 left-0 h-full w-screen`, className)}/>
}
const Logo = asComponent('div', theme.logo)
const Title = asComponent('div', theme.title)
const SubTitle = asComponent('div', theme.subTitle)
const Description = asComponent('div', theme.description)
const Actions = asComponent('div', theme.actions)
const PrimaryButton = asComponent<ComponentProps<'button'>>('button', theme.primaryButton)
const SecondaryButton = asComponent<ComponentProps<'button'>>('button', theme.secondaryButton)
const Addition = asComponent('div', theme.addition)
const AdditionTitle = asComponent('div', theme.additionTitle)
const AdditionIconList = asComponent('div', theme.additionIconList)
const AdditionIconLink = asComponent<{href?: string}>('a', theme.additionIconLink)


export default Object.assign(Hero, {
    Background,
    Logo,
    Title,
    SubTitle,
    Description,
    Actions,
    PrimaryButton,
})

export interface DemoData {
    logo: ComponentChildren,
    title: string,
    subTitle: string,
    description: string,
    primaryButton: string,
    secondaryButton: string,
    additionTitle: string,
    addtionIcons: ComponentChildren[],
}

export function Demo(data: DemoData) {
    return <Hero>
        <Background/>
        <Logo>{data.logo}</Logo>
        <Title>{data.title}</Title>
        <SubTitle>{data.subTitle}</SubTitle>
        <Description>{data.description}</Description>
        <Actions>
            <PrimaryButton>{data.primaryButton}</PrimaryButton>
            <SecondaryButton>{data.secondaryButton}</SecondaryButton>
        </Actions>
        <Addition>
            <AdditionTitle>{data.additionTitle}</AdditionTitle>
            <AdditionIconList>
                {data.addtionIcons.map(icon => <AdditionIconLink href="">{icon}</AdditionIconLink>)}
            </AdditionIconList>
        </Addition>
    </Hero>
}
