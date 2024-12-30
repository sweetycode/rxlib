import { asComponent } from "common-ui/decl"
import { ComponentProps, type ComponentChildren } from "preact"


const theme = {
    contact: ``,
    hero: ``,
    form: ``,

    title: ``,
    description: ``,
    experts: ``,
    expert: ``,
    features: ``,
    featuresTitle: ``,
    featureList: ``,
    featureItem: ``,

    techniques: ``,
    technique: ``,

    field: ``,
    label: ``,
    input: ``,
    select: ``,
    actions: ``,
    primaryButton: ``,
    message: ``,
    messageLink: ``,
}

const Contact = asComponent('div', theme.contact)
const Hero = asComponent('div', theme.hero)
const Form = asComponent('div', theme.form)

const Title = asComponent('div', theme.title)
const Description = asComponent('div', theme.description)
const Experts = asComponent('div', theme.experts)
const Expert = asComponent('div', theme.expert)
const Features = asComponent('div', theme.features)
const FeaturesTitle = asComponent('div', theme.featuresTitle)
const FeatureList = asComponent('ul', theme.featureList)
const FeatureItem = asComponent('li', theme.featureItem)
const Techniques = asComponent('div', theme.techniques)
const Technique = asComponent('div', theme.technique)

const Field = asComponent('div', theme.field)
const Label = asComponent('label', theme.label)
const Input = asComponent<ComponentProps<'input'>>('input', theme.input)
const Actions = asComponent('div', theme.actions)
const PrimaryButton = asComponent<ComponentProps<'button'>>('button', theme.input)
const Message = asComponent('div', theme.message)
const MessageLink = asComponent<{href: string}>('a', theme.messageLink)

export interface DemoData {
    title: string
    description: string
    experts: ComponentChildren[]
    featuresTitle: string
    features: string[]
    techniques: ComponentChildren[]
    fields: string[]
    primaryButton: string
    message: string
}


export function Demo(data: DemoData) {
    return <Contact>
        <Hero>
            <Title>{data.title}</Title>
            <Description>{data.description}</Description>
            <Experts>
                {data.experts.map(expert => <Expert>{expert}</Expert>)}
            </Experts>
            <Features>
                <FeaturesTitle>{data.featuresTitle}</FeaturesTitle>
                <FeatureList>
                    {data.features.map(feature => <FeatureItem>{feature}</FeatureItem>)}
                </FeatureList>
            </Features>
            <Techniques>
                {data.techniques.map(technique => <Technique>{technique}</Technique>)}
            </Techniques>
        </Hero>
        <Form>
            {data.fields.map(field => <Field><Label>{field}</Label><Input/></Field>)}
            <Actions>
                <PrimaryButton>{data.primaryButton}</PrimaryButton>
            </Actions>
            <Message>{data.message}</Message>
        </Form>
    </Contact>
}
