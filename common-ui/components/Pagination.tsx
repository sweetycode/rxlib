import { ChevronLeftIcon, ChevronRightIcon, EllipsisIcon } from "common-icons/icons";
import type { CcProps, CnProps } from "common-ui/types";
import { ccx } from "common-utils/cx";

const theme = {
    container: `flex align-center justify-center`,
    pagination: `flex items-center gap-1 text-sm font-medium`,
    indicator: (link: boolean) => `inline-flex items-center px-3 py-1.5 space-x-1 rounded-md whitespace-nowrap ${link? 'hover:bg-zinc-100': 'text-zinc-500'}`,
    item: (current: boolean) => `px-3 py-1.5 hover:bg-zinc-100 rounded-md ${current? 'border border-zinc-200 shadow-sm': ''}`,
    ellipsis: `px-3 py-1.5`,
}

function Pagination({containerClassName, className, children}: CcProps & {containerClassName?: string}) {
    return <div className={ccx(theme.container, containerClassName)}>
        <div className={ccx(theme.pagination, className)}>
            {children}
        </div>
    </div>
}

function LinkOrSpan({current, href, className, children}: CcProps & {href?: string, current?: boolean}) {
    const props = {
        href,
        className,
        children,
        "data-current": current === true ? true: undefined,
    }
    return href != null ? <a {...props}/>: <span {...props}/> 
}


function Item({href, className, current, children}: CcProps & {href: string, current?: boolean}) {
    const props = {
        current,
        href,
        className: ccx(theme.item(current ?? false), className),
        children,
    }
    return <LinkOrSpan {...props}/>
}

function Previous({href, className, children}: CcProps & {href?: string}) {
    return <LinkOrSpan href={href} className={ccx(theme.indicator(href != null), className)}>
        <ChevronLeftIcon/>
        {children}
    </LinkOrSpan>
}

function Next({href, className, children}: CcProps & {href?: string}) {
    return <LinkOrSpan href={href} className={ccx(theme.indicator(href != null), className)}>
        {children}
        <ChevronRightIcon/>
    </LinkOrSpan>
}

function Ellipsis({className}: CnProps) {
    return <span className={ccx(theme.ellipsis, className)}><EllipsisIcon/></span>
}

export default Object.assign(Pagination, {
    Item,
    Previous,
    Next,
    Ellipsis,
})


export function PaginationDemo() {
    <Pagination>
		<Previous href="#">Previous</Previous>
		<Item href="#">1</Item>
		<Item href="#">2</Item>
		<Ellipsis/>
		<Item href="#" current>3</Item>
		<Next>Next</Next>
	</Pagination>
}