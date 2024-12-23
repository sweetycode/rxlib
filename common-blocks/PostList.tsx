
// reference: https://www.shadcnblocks.com/preview/blog17#

import { asComponent, wrapWith } from "common-ui/decl"


const theme = {
    container: ``,
    item: `py-8 first:pt-0 last:pb-0 border-b last:border-none border-zinc-200 space-y-3`,
    title: `text-2xl lg:text-3xl font-semibold text-balance`,
    heading: `text-sm font-semibold text-zinc-500`,
    category: ``,
    description: `text-zinc-500`,
    metadata: ``,
    pubDate: `text-sm text-zinc-500`,
}


const PostList = asComponent('div', theme.container)
const Item = asComponent('div', theme.item)
const Heading = asComponent('div', theme.heading)
const Category = asComponent<{href: string}>('a', theme.category)
const Title = wrapWith('h3', {}, asComponent<{href: string}>('a', theme.title))
const Description = asComponent('p', theme.description)
const Metadata = asComponent('p', theme.metadata)
const PubDate = asComponent('span', theme.pubDate)


export default Object.assign(PostList, {
    Item,
    Heading,
    Category,
    Title,
    Description,
    Metadata,
    PubDate,
})


export function Demo() {
    const post = {
        title: 'Getting Started with Modern Web Development: A Complete Guide', 
        category: 'Web Development',
        description: `Dive into the fundamentals of modern web development. Learn about essential tools, frameworks, and best practices that will help you build robust and scalable web applications in today's fast-paced development environment.`,
        pubDate: `March 15, 2024`
    }
    return <PostList>
        {[post, post, post].map(({title, category, description, pubDate}) => <Item>
            <Heading>
                <Category href="#">{category}</Category>
            </Heading>
            <Title href="#">{title}</Title>
            <Description>{description}</Description>
            <Metadata>
                <PubDate>{pubDate}</PubDate>
            </Metadata>
        </Item>)}
    </PostList>
}