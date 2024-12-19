import type { CcProps } from "common-ui/types"

export function ResizableDemo() {
    return <Resizable/>
}

type Direction = 'horizontal'|'vertical'

function Resizable({direction}: CcProps&{direction?: Direction}) {

}

function Panel() {

}

function Handle() {

}

export default Object.assign(Resizable, {
    Panel,
    Handle,
})
