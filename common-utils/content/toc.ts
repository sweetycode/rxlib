import { lastElementOf } from "common-utils/utils/lists"
import { LoadingMap } from "common-utils/utils/maps"

export interface Heading {
    level: number
    slug: string
    text: string
}

export interface HierarchicalHeading extends Heading {
    subHeadings: HierarchicalHeading[]
}

export interface TableOfContent {
    headings: HierarchicalHeading[]
}

export function buildHierarchicalToc(flattenHeadings: Heading[], topLevel: number) {
    const topLevelHeadings: HierarchicalHeading[] = []
    const lastHeadingsMapping = new LoadingMap<number, HierarchicalHeading[]>(() => [])

    function getParent(level: number): HierarchicalHeading[] {
        if (level <= topLevel) {
            return topLevelHeadings
        }
        
        // loop util find valid parent, because there might has some absence for intermediate level heading
        for (let n = level - 1; n >= topLevel; n--) {
            const parent = lastElementOf(lastHeadingsMapping.get(level - 1))
            if (parent != null && parent.level < level) {
                return parent.subHeadings
            }
        }
        return topLevelHeadings
    }

    for (let heading of flattenHeadings) {
        const hierarchicalHeading = {...heading, subHeadings: []}
        const parent = getParent(heading.level)
        parent.push(hierarchicalHeading)
        lastHeadingsMapping.get(heading.level).push(hierarchicalHeading)
    }

    return topLevelHeadings
}