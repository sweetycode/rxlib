import { defineSC, type CcProps, type CnProps } from "common-ui/utils"
import { ccx } from "common-utils/cx"

const theme = {
    post: ``,
    category: ``,
    title: ``,
    metadata: ``,
    pubDate: ``,
    content: ``,
    body: ``,
}

const Post = defineSC('div', theme.post)
const Category = ({className, ...props}: CcProps & {href?: string}) => {
    return <div><a className={ccx(theme.category, className)} {...props}></a></div>
}
const Title = defineSC('h1', theme.title)
const Metadata = defineSC('div', theme.metadata)
const PubDate = defineSC('span', theme.pubDate)
const Content = defineSC('div', theme.content)
const Body = ({className, html, ...props}: CnProps & {html: string}) => {
    return <div className={ccx(theme.body, className)} dangerouslySetInnerHTML={{__html: html}} {...props}></div>
}


export default Object.assign(Post, {
    Category,
    Title,
    Metadata,
    PubDate,
    Content,
    Body,
})


export interface DemoData {
    category: string
    title: string
    pubDate: string,
    body: string,
}

export function Demo(data: DemoData) {
    return <Post>
        <Category href="#">{data.category}</Category>
        <Title>{data.title}</Title>
        <Metadata>
            <PubDate>{data.pubDate}</PubDate>
        </Metadata>
        <Content>
            <Body html={data.body}/>
        </Content>
    </Post>
}