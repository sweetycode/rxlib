
// https://www.shadcnblocks.com/preview/pricing7/

import { CircleCheck } from "common-icons/icons"
import Tabs from "common-ui/components/Tabs"
import { asComponent, type CnProps } from "common-ui/decl"
import { ccx } from "common-utils/cx"

const theme = {
    pricing: `flex flex-col items-center`,
    hero: `max-w-screen-md mx-auto mb-16 text-center space-y-4`,
    title: `text-4xl lg:text-5xl font-semibold`,
    description: `lg:text-lg text-zinc-500`,
    billingOptions: `mb-8`,
    yearlyDiscount: `rounded-full text-green-600 bg-green-100 border border-green-200 px-1 py-0.5 text-xs`,
    plans: `flex space-x-6`,
    plan: `flex-1 border border-zinc-200 rounded-lg p-6`,
    planName: `px-2 py-0.5 text-xs mb-4 font-medium bg-zinc-900 text-white rounded-full inline-block`,
    price: `text-3xl font-medium`,
    pricePeriod: `font-semibold`,
    planDescription: `mt-2 text-zinc-500`,
    features: `mt-6 pt-6 border-t border-zinc-200/90`,
    featureHeader: `font-semibold`,
    featureList: ``,
    featureItem: `my-3 flex items-center`,
    actions: `mt-6`,
    primaryButton: `rounded-lg w-full text-center py-2 bg-zinc-900 text-white hover:bg-zinc-900/90`,
}


const Pricing = asComponent('div', theme.pricing)
const Hero = asComponent('div', theme.hero)
const Title = asComponent('div', theme.title)
const Description = asComponent('div', theme.description)
const BillingOptions = ({className}: CnProps) => {
    return <Tabs className={ccx(theme.billingOptions, className)} defaultValue="monthly">
        <Tabs.List>
            <Tabs.Trigger value="monthly">Monthly</Tabs.Trigger>
            <Tabs.Trigger>Yearly <YearlyDiscount>-20%</YearlyDiscount></Tabs.Trigger>
        </Tabs.List>
    </Tabs>
}
const YearlyDiscount = asComponent('span', theme.yearlyDiscount)
const Plans = asComponent('div', theme.plans)
const Plan = asComponent('div', theme.plan)
const PlanName = asComponent('div', theme.planName)
const Price = asComponent('div', theme.price)
const PricePeriod = asComponent('div', theme.pricePeriod)
const PlanDescription = asComponent('div', theme.planDescription)
const Features = asComponent('div', theme.features)
const FeatureHeader = asComponent('div', theme.featureHeader)
const FeatureList = asComponent('ul', theme.featureList)
const FeatureItem = asComponent('li', theme.featureItem)
const Actions = asComponent('div', theme.actions)
const PrimaryButton = asComponent<{href?: string}>('button', theme.primaryButton)


export interface DemoData {
    title: string
    description: string
    plans: {
        name: string,
        price: string,
        pricePeriod: string,
        description: string,
        features: {
            header: string,
            items: string[]
        }
        primaryButton: string
    }[]
}

export function Demo(data: DemoData) {
    return <Pricing>
        <Hero>
            <Title>{data.title}</Title>
            <Description>{data.description}</Description>
        </Hero>
        <BillingOptions/>
        <Plans>
            {data.plans.map(({name, price, pricePeriod, description, features, primaryButton}) => <Plan>
                <PlanName>{name}</PlanName>
                <Price>${price}</Price>
                <PricePeriod>{pricePeriod}</PricePeriod>
                <PlanDescription>{description}</PlanDescription>
                <Features>
                    <FeatureHeader>{features.header}</FeatureHeader>
                    <FeatureList>
                        {features.items.map(item => <FeatureItem><CircleCheck className="mr-1"/> {item}</FeatureItem>)}
                    </FeatureList>
                </Features>
                <Actions>
                    <PrimaryButton>{primaryButton}</PrimaryButton>
                </Actions>
            </Plan>)}
        </Plans>
    </Pricing>
}