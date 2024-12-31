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



export function createStaticPathsMapperForSlug<E extends {id: string, data: {slug?: string}}>():(entry: E) => {params: {slug: string}, props: {entry: E}} {
    return entry => ({
        params: {slug: entry.data.slug ?? entry.id},
        props: {entry},
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


export function createMapperForExtractingCategoryFromSlug<E extends {id: string, data: {slug?: string, category?: string}}>(
): (entry: E) => E {
    return e => {
        if (e.data.slug == null) {
            e.data.slug = e.id
        }
        const match = e.data.slug.match(/^(\w+)\//)
        if (match) {
            e.data.category = match[1]
            e.data.slug = e.data.slug.substring(match[0].length)
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
            e.data.pubDate = new Date(`20${year}-${month}-${day}`)
            e.data.slug = e.data.slug.substring(all.length)
        }
        return e
    }
}