

import { asComponent } from "common-ui/decl"
import type { ComponentChildren, ComponentProps } from "preact"
import { type CnProps } from 'common-ui/decl';
import { ccx } from "common-utils/cx";
import Checkbox from "common-ui/elements/Checkbox";

// https://www.shadcnblocks.com/block/login3/

const theme = {
    container: `w-full max-w-sm p-6 rounded-lg shadow border border-zinc-50 text-center space-y-4 text-zinc-900`,
    hero: `space-y-1 flex flex-col items-center`,
    logo: ``,
    title: `text-2xl font-bold mt-4`,
    subTitle: `text-zinc-500`,
    form: `flex flex-col space-y-4`,
    input: `rounded-lg border border-zinc-200 px-3 py-2 w-full`,
    optionsContent: `flex justify-between items-center text-sm font-medium`,
    rememberMe: `flex items-center`,
    forgotPasswordLink: ``,
    primaryButton: `w-full text-center bg-zinc-900 text-white rounded-lg py-2 hover:bg-zinc-900/90`,
    secondaryButton: `w-full text-center border border-zinc-200 rounded-lg py-2 hover:bg-zinc-100`,
    signupPromptContent: `flex justify-center text-sm space-x-1`,
    signupPromptText: `text-zinc-500`,
    signupPromptLink: `font-medium`,
}

const Login = asComponent('div', theme.container)
const Hero = asComponent('div', theme.hero)
const Logo = asComponent('div', theme.logo)
const Title = asComponent('div', theme.title)
const SubTitle = asComponent('div', theme.subTitle)
const Form = asComponent<ComponentProps<'form'>>('form', theme.form)
const Input = asComponent<ComponentProps<'input'>>('input', theme.input)
const OptionsContent = asComponent('div', theme.optionsContent)
const OptionRememberMe = ({className, children, ...props}: CnProps&ComponentProps<'input'>) => {
    return <label className={ccx(theme.rememberMe, className)}>
        <Checkbox {...props}/>
        <span className="ml-1">{children}</span>
    </label>
}
const OptionForgotPasswordLink = asComponent<{href?: string}>('a', theme.forgotPasswordLink)
const PrimaryButton = asComponent<ComponentProps<'button'>>('button', theme.primaryButton)
const SecondaryButton = asComponent<ComponentProps<'button'>>('button', theme.secondaryButton)
const SignupPromptContent = asComponent('div', theme.signupPromptContent)
const SignupPromptText = asComponent('div', theme.signupPromptText)
const SignupPromptLink = asComponent<{href?: string}>('a', theme.signupPromptLink)

export default Object.assign(Login, {
    Hero,
    Logo,
    Title,
    SubTitle,
    Form,
    Input,
    OptionsContent,
    OptionRememberMe,
    OptionForgotPasswordLink,
    PrimaryButton,
    SecondaryButton,
    SignupPromptContent,
    SignupPromptText,
    SignupPromptLink,
})

export interface DemoData {
    logo: ComponentChildren
    title: string
    subTitle: string
    rememberMe: string
    forgotPasswordLink: string
    primaryButton: string
    secondaryButton: string
    signupPromptText: string
    signupPromptLink: string
}

export function Demo({logo, title, subTitle, rememberMe, forgotPasswordLink, primaryButton, secondaryButton, signupPromptText, signupPromptLink}: DemoData) {
    return <Login>
        <Hero>
            <Logo asChild>{logo}</Logo>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
        </Hero>
        <Form>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <OptionsContent>
                <OptionRememberMe>{rememberMe}</OptionRememberMe>
                <OptionForgotPasswordLink href="#">{forgotPasswordLink}</OptionForgotPasswordLink>
            </OptionsContent>
            <PrimaryButton>{primaryButton}</PrimaryButton>
            <SecondaryButton>{secondaryButton}</SecondaryButton>
        </Form>
        <SignupPromptContent>
            <SignupPromptText>{signupPromptText}</SignupPromptText>
            <SignupPromptLink href="#">{signupPromptLink}</SignupPromptLink>
        </SignupPromptContent>
    </Login>
}