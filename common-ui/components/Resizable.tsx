import { ccx } from "common-utils/cx"
import { toChildArray, type ComponentChildren } from "preact"


const theme = {
    resizable: ``,
    panel: ``,
    handle: ``,
}


type Direction = 'horizontal'|'vertical'
interface ResizableProps {
    className?: string
    children: ComponentChildren
    direction?: Direction
}


function Resizable({direction, className, children}: ResizableProps) {
    return <div className={ccx(theme.resizable, className)}>
        {toChildArray(children).map((child, index) => {
            return index == 0 ? child: <><Handle/>{child}</>
        })}
    </div>
}

function Panel({className, children}: {className?: string, children: ComponentChildren}) {
    return <div className={ccx(theme.panel, className)}>{children}</div>
}

function Handle({className}: {className?: string}) {
    return <div className={ccx(theme.handle, className)}></div>
}

export default Object.assign(Resizable, {
    Panel,
    Handle,
})
