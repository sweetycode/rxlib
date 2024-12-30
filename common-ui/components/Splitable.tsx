import { ccx } from "common-utils/cx"
import { toChildArray, type ComponentChildren } from "preact"


const theme = {

}


// TODO

type SplitDirection = 'horizontal'|'vertical'

// reference: https://allotment.mulberryhousesoftware.com/docs/allotment
interface SplitableProps {
    children: ComponentChildren
    className?: string
    direction?: SplitDirection
    defaultSizes?: number[] // initial sizes of panes
    maxSize?: number  // maximum size of any pane
    minSize?: number  // minimum size of any pane
    proportionalLayout: boolean  // resize each view proportionally when resizing container
    separator: boolean  // whether to render a seperator between panes
}

function Splitable({children, className, direction}: SplitableProps) {
    const baseClassName = `flex flex-row`
    return <div className={ccx(baseClassName, className)}>
        {toChildArray(children).map((children, index) => {
            return (index === 0) ? children: <><Separator/>{children}</>
        })}
    </div>
}

function Separator() {
    return <div className="h-full w-[10px] bg-zinc-200"></div>
}

interface PaneProps {
    maxSize?: number  // maximum size of this pane, overrides `maxSize` set on parent
    minSize?: number  // minimum size of this pane, overrides `minSize` set on parent
    preferedSize?: string
}

function Pane(props: PaneProps) {
    return <div>

    </div>
}


export default Object.assign(Splitable, {
    Pane,
})

