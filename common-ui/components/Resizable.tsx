import type { CcProps } from "common-ui/decl"
import { ccx } from "common-utils/cx"
import { cloneElement, toChildArray, type ComponentChildren, type VNode } from "preact"
import type { CSSProperties } from "preact/compat"
import { useCallback, useEffect, useMemo, useRef, useState } from "preact/hooks"


// https://github.dev/yyllff/split-pane-react

const HANDLE_SIZE = 8

const theme = {
    resizable: `flex`,
    panel: ``,
    handle: `grow-0 shrink-0 w-[8px] bg-zinc-600 cursor-col-resize`,
}


type Direction = 'horizontal'|'vertical'
interface ResizableProps {
    className?: string
    children: ComponentChildren
    direction?: Direction
}


function getPanels(children: ComponentChildren): VNode<PanelProps>[] {
    return toChildArray(children).map(child => {
        if (typeof child === 'number' || typeof child === 'string') {
            throw new Error(`Unexpected child of Resizable ${child}`)
        }
        if (child.type !== Panel) {
            throw new Error(`Unexpected child of Resizable ${child}`)
        }
        return child as VNode<PanelProps>
    })
}

function Resizable({direction, className, children}: ResizableProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [containerSize, setContainerSize] = useState<number>(0)
    const dragStartStateRef = useRef<{cursor: {x: number, y: number}, pane1: DOMRect, pane2: DOMRect}>(null)
    const [sizes, setSizes] = useState<number[]>([])
    
    const panels = useMemo(() => getPanels(children), [children])
    const handleOccupiedSize = HANDLE_SIZE * (panels.length -1)

    useEffect(() => {
        const observer = new ResizeObserver(() => {
            const rect = containerRef.current!.getBoundingClientRect()
            setContainerSize(rect.right - rect.left)
        })
        observer.observe(containerRef.current!)
        return () => observer.disconnect()
    }, [])

    const sizesLimit: [number, number][] = useMemo(() => panels.map(panel => {
        const [minSize, maxSize] = [panel.props.minSize ?? 0, panel.props.maxSize ?? Infinity]
        return [minSize < 0 ? containerSize * minSize: minSize, maxSize < 0? containerSize * maxSize: maxSize]
    }), [panels, containerSize])

    useEffect(() => {
        if (containerSize == 0) {
            return
        }
        const containerNetSize = containerSize - handleOccupiedSize
        const sizes = panels.map((panel, index) => {
            const [mixSize, maxSize] = sizesLimit[index]
            const defaultSize = panel.props.defaultSize
            if (defaultSize == 0) {
                return 0
            } else if (defaultSize < 1) {
                return Math.min(Math.max(defaultSize * containerNetSize, mixSize), maxSize)
            } else {
                return defaultSize
            }
        })
        const autoPanelCount = sizes.filter(n => n == 0).length
    }, [containerSize])


    function handleDragStart(index: number) {

    }

    function handleDragging(index: number) {
        console.log('handleDragging', index)
    }


    return <div className={ccx(theme.resizable, className)} ref={containerRef}>
        {panels.map((panel, index) => {
            return index == 0 ? cloneElement(panel, {style: styles[index]})
                : <>
                    <Handle index={index-1} onDragging={() => handleDragging(index-1)} onDragStart={() => handleDragStart(index-1)}/>
                    {cloneElement(panel, {})}
                </>
        })}
    </div>
}

interface PanelProps {
    children: ComponentChildren
    className?: string
    defaultSize: number
    maxSize?: number
    minSize?: number
    style?: CSSProperties
}

function Panel({className, maxSize, minSize, defaultSize=0, ...props}: PanelProps) {
    return <div className={ccx(theme.panel, className)} {...props}/>
}

function Handle({className, onDragging, onDragStart}: {className?: string, index: number, onDragging: () => void, onDragStart: () => void}) {
    const [dragging, setDragging] = useState(false)
    function handleMouseDown() {
        setDragging(true)
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseup', handleMouseUp)
        onDragStart()
    }
    function handleMouseMove() {
        if (dragging) {
            onDragging()
        }
    }

    function handleMouseUp() {
        setDragging(false)
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
    }

    return <div className={ccx(theme.handle, className)} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}></div>
}

export default Object.assign(Resizable, {
    Panel,
})
