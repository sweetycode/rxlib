import type { CcProps } from "common-ui/types"
import { ccx } from "common-utils/cx"

/**
 * reference: https://www.shadcnblocks.com/preview/blog17#
 * 
 * This component encapsulates the styles for article list.
 */


export function ArticleListDemo() {
    const article = {
        title: 'Getting Started with Modern Web Development: A Complete Guide', 
        category: 'Web Development',
        description: `Dive into the fundamentals of modern web development. Learn about essential tools, frameworks, and best practices that will help you build robust and scalable web applications in today's fast-paced development environment.`,
        pubDate: `March 15, 2024`
    }
    return <ArticleList>
        {[article, article, article].map(({title, category, description, pubDate}) => <Item>
            <p><ItemCategory href="#">{category}</ItemCategory></p>
            <ItemTitle href="#">{title}</ItemTitle>
            <ItemDescription>{description}</ItemDescription>
        <p><ItemPubDate>{pubDate}</ItemPubDate></p>
        </Item>)}
    </ArticleList>
}


const theme = {
    articleList: ``,
    item: `py-8 first:pt-0 last:pb-0 border-b last:border-none border-zinc-200 space-y-3`,
    itemTitle: `text-2xl lg:text-3xl font-semibold text-balance`,
    itemCategory: `text-sm font-semibold text-zinc-500`,
    itemDescription: `text-zinc-500`,
    itemPubDate: `text-sm text-zinc-500`,
}


function ArticleList({className, children}: CcProps) {
    return <div className={ccx(theme.articleList, className)}>
        {children}
    </div>
}

function Item({className, children}: CcProps) {
    return <div className={ccx(theme.item, className)}>
        {children}
    </div>
}

function ItemTitle({href, className, children}: CcProps & {href: string}) {
    return <h3>
        <a href="" className={ccx(theme.itemTitle, className)}>{children}</a>
    </h3>
}

function ItemCategory({className, children, href}: CcProps & {href: string}) {
    return <a href={href} className={ccx(theme.itemCategory, className)}>{children}</a>
}

function ItemDescription({className, children}: CcProps) {
    return <p className={ccx(theme.itemDescription, className)}>
        {children}
    </p>
}


function ItemPubDate({className, children}: CcProps) {
    return <span className={ccx(theme.itemPubDate, className)}>{children}</span>
}

export default Object.assign(ArticleList, {
    Item,
    ItemTitle,
    ItemCategory,
    ItemDescription,
    ItemPubDate,
})
