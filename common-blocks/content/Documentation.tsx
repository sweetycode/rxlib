import type { CcProps } from "common-ui/types";
import { ccx } from "common-utils/cx";
import type { ComponentChildren, VNode } from "preact";

const theme = {
    documentation: `container mx-auto md:grid md:grid-cols-[220px_minmax(0, 1fr)] lg:grid-cols-[240px_minmax(0, 1fr)] md:gap-6 lg:gap-1`,
    aside: ``,
    asideSection: ``,
    asideSectionTitle: ``,
    asideSectionList: ``,
    asideSectionListItem: ``,
}

function Documentation({className, children}: CcProps<VNode[]>) {
    return <div className={ccx(theme.documentation, className)}>
        {children}
    </div>
}

function Aside({className, children}: CcProps) {
    return <aside className={ccx(theme.aside, className)}>
        {children}
    </aside>
}

function AsideList({className}: CcProps) {

}

function AsideListItem({className}: CcProps) {

}

function Content({className}: CcProps) {

}


function Toc({className}: CcProps) {

}

function TocList({className}: CcProps) {

}

function TocListItem({className}: CcProps) {

}


export default Object.assign(Documentation, {
    Aside,
    AsideList,
    AsideListItem,
    Content,
    Toc,
    TocList,
    TocListItem,
})
