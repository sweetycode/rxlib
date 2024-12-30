import { asComponent } from "common-ui/decl"
import type { ComponentChildren, ComponentProps } from "preact"


// https://www.shadcnblocks.com/block/cta13/
const theme = {
    cta: `container mx-auto bg-zinc-100 p-12 rounded-2xl space-y-8 lg:space-y-0 lg:flex items-center justify-center space-x-20`,
    main: `flex-1 space-y-4 lg:space-y-6`,
    title: `text-2xl md:text-4xl font-semibold`,
    description: `text-zinc-500 lg:text-lg`,
    actions: `min-w-lg space-y-2`,
    actionField: `flex items-center space-x-2`,
    input: `flex-1 px-3 py-2 rounded-lg border border-zinc-200`,
    primaryButton: `px-3 py-2 rounded-lg bg-zinc-900 hove:bg-zinc-900/90 text-white`,
    message: `text-zinc-500 text-sm`,
    messageLink: `underline hover:text-zinc-900`,
}


const Cta = asComponent('div', theme.cta)
const Main = asComponent('div', theme.main)
const Title = asComponent('div', theme.title)
const Description = asComponent('div', theme.description)
const Actions = asComponent('div', theme.actions)
const ActionField = asComponent('div', theme.actionField)
const Input = asComponent<ComponentProps<'input'>>('input', theme.input)
const PrimaryButton = asComponent('div', theme.primaryButton)
const Message = asComponent('div', theme.message)
const MessageLink = asComponent<{href: string}>('a', theme.messageLink)


export default Object.assign(Cta, {
    Main,
    Message,
    MessageLink,
})

export interface DemoData {
    title: string,
    description: string,
    primaryButton: string,
    message: ComponentChildren,
}

export function Demo(data: DemoData) {
    return <Cta>
        <Main>
            <Title>{data.title}</Title>
            <Description>{data.description}</Description>
        </Main>
        <Actions>
            <ActionField>
                <Input/>
                <PrimaryButton>{data.primaryButton}</PrimaryButton>
            </ActionField>
            <Message>{data.message}</Message>
        </Actions>
    </Cta>
}