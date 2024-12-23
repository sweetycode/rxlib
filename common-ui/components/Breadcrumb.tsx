import { asComponent } from "common-ui/decl"
import { wrapWith } from '../decl';
import { ChevronRightIcon } from "common-icons/icons";

const theme = {
    container: `flex flex-wrap items-center gap-1 text-sm text-zinc-500`,
    label: ``,
    seperator: ``,
    link: ``,
}

const Breadcrumb = asComponent('ul', theme.container)
const Label = wrapWith('li', {}, asComponent('span', theme.label))
const Link = wrapWith('li', {}, asComponent<{href: string}>('a', theme.link))
const Seperator = () => <li><ChevronRightIcon size="20"/></li>


export default Object.assign(Breadcrumb, {
    Label,
    Link,
    Seperator,
})
