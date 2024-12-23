import { ChevronLeftIcon, ChevronRightIcon, EllipsisIcon } from "common-icons/icons";
import { asComponent, type CnProps } from "common-ui/decl";
import { ccx } from "common-utils/cx";

const theme = {
    container: `flex items-center gap-1 text-sm font-medium`,
    label: `inline-flex items-center px-3 py-1.5 space-x-1 rounded-md whitespace-nowrap text-zinc-500`,
    link: `inline-flex items-center px-3 py-1.5 space-x-1 rounded-md whitespace-nowrap hover:bg-zinc-100`,
    item: (current: boolean) => `px-3 py-1.5 hover:bg-zinc-100 rounded-md ${current? 'border border-zinc-200 shadow-sm': ''}`,
    ellipsis: `px-3 py-1.5`,
}

const Pagination = asComponent('div', theme.container)
const Label = asComponent('span', theme.label)
const Link = asComponent<{href: string}>('a', theme.link)

function Ellipsis({className}: CnProps) {
    return <span className={ccx(theme.ellipsis, className)}><EllipsisIcon/></span>
}

export default Object.assign(Pagination, {
    Label,
    Link,
    Ellipsis,
})


export function PaginationDemo() {
    <Pagination>
		<Link href="#"><ChevronLeftIcon/>Previous</Link>
		<Link href="#">1</Link>
		<Link href="#">2</Link>
		<Ellipsis/>
		<Link href="#">3</Link>
		<Label>Next<ChevronRightIcon/></Label>
	</Pagination>
}