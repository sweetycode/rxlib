import type { CcProps } from "common-ui/types"
import { ccx } from "common-utils/cx"
import type { ComponentChildren } from "preact"

const theme = {
    breadcrumb: `flex items-center space-x-1 leading-none text-zinc-500`,
    item: (link: boolean) => ``,
}

function Breadcrumb({className, children}: CcProps) {
    return <div className={ccx(theme.breadcrumb, className)}>
        {children}
    </div>
}

function Item({className, href, children}: CcProps & {href?: string}) {
    const props = {
        className: ccx(theme.item(href != null), className),
        href,
        children,
    }
    return href ? <a {...props}/>: <span {...props}/>
}


export default Object.assign(Breadcrumb, {
    Item,
})