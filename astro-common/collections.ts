import { isDev } from "./common";


/**
 * 
 * @returns a filter function which filter out the draft posts in prod mode
 */
export function createFilterForDraft<E extends {data: {draft?: boolean}}>(
):(entry: E) => boolean  {
    if (!isDev()) {
        return () => true
    }
    return entry => !(entry.data.draft ?? false)
}



export function createStaticPathsMapperForSlug<E extends {id: string, data: {slug?: string}}>({
    propsGenerator
}: {
    propsGenerator: (entry: E) => Record<string, unknown>
}):(entry: E) => {params: {slug: string}, props: Record<string, unknown>} {
    return entry => ({
        params: {slug: entry.data.slug ?? entry.id},
        props: propsGenerator(entry)
    })
}


export function createMapperForDraftAnnotation<E extends {data: {draft?: boolean, title: string}}>(
): (entry: E) => E {
    if (!isDev()) {
        return e => e
    }
    return e => {
        if (e.data.draft) {
            e.data.title = `[DRAFT] ${e.data.title}`
        }
        return e
    }
}

export function createMapperForExtractingPubDateFromSlug<E extends {id: string, data: {slug?: string, pubDate?: Date}}>(
): (entry: E) => E {
    return e => {
        if (e.data.slug == null) {
            e.data.slug = e.id
        }
        const match = e.data.slug.match(/(\d{2})(\d{2})\/(\d{2})_/)
        if (match) {
            const [all, year, month, day] = match
            console.log({match})
            e.data.pubDate = new Date(`20${year}-${month}-${day}`)
            e.data.slug = e.data.slug.substring(all.length)
        }
        return e
    }
}