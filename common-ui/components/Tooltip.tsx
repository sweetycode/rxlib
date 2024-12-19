import type { CcProps } from "common-ui/types";
import { cloneElement, type VNode } from "preact";
import { useCallback, useEffect, useMemo, useRef, useState } from "preact/hooks";
import { PortalWhen } from './Portal';
import { ccx } from 'common-utils/cx';
import { useObjectState } from "react-lib/hooks/states";

class DelayedPresence {
    showDelay: number
    hideDelay: number

    showTimer?: number
    hideTimer?: number

    constructor(delay: number, hideDelay?: number) {
        this.showDelay = delay
        this.hideDelay = hideDelay ?? delay
    }

    show(callback: () => void) {
        if (this.hideTimer) {
            clearTimeout(this.hideTimer)
            this.hideTimer = undefined
        }
        if (!this.showTimer) {
            this.showTimer = setTimeout(() => {
                callback()
                this.showTimer = undefined
            }, this.showDelay) as any
        }
    }

    hide(callback: () => void) {
        if (this.showTimer) {
            clearTimeout(this.showTimer)
            this.showTimer = undefined
        }
        if (!this.hideTimer) {
            this.hideTimer = setTimeout(() => {
                callback()
                this.hideTimer = undefined
            }, this.hideDelay) as any
        }
    }
}


interface TooltipState {
    open: boolean
    style: Record<string, string>
}



const config = {
    showDelay: 250,
    hideDelay: 250,
    gap: 2,
}

type Placement = 'left'|'right'|'top'|'bottom'

function getPlacement(el: HTMLElement, placement: Placement, gap: number): Record<string, string> {
    const {x, y, width, height} = el.getBoundingClientRect()
    console.log({x, y, width, height})
    switch (placement) {
        case 'bottom':
            return {top: `${window.scrollY + y + height + gap}px`, left: `${window.scrollX + x+width/2}px`, transform: 'translateX(-50%)'}
        case 'top':
            return {top: `${window.scrollY + y - gap}px`, left: `${window.scrollX + x+width/2}px`, transform: 'translateX(-50%) translateY(-100%)'}
        case 'left':
            return {top: `${window.scrollY + y + height/2}px`, right: `${window.scrollX + y-gap}px`, transform: `translateY(-50%)`}
        default: // right
            return {top: `${window.scrollY + y + height/2}px`, left: `${window.scrollX + x+width+gap}px`, transform: `translateY(-50%)`}
    }
}

export default function Tooltip({tooltip, children, className, placement = 'bottom'}: CcProps<VNode>&{tooltip: string, placement?: Placement}) {
    const ref = useRef<HTMLElement>(null)
    const [state, setState] = useObjectState<TooltipState>({open: false, style: {}})

    const presence = useMemo(() => {
        return new DelayedPresence(config.showDelay, config.hideDelay)
    }, [])

    const show = useCallback(() => {
        setState({style: getPlacement(ref.current!, placement, config.gap)})
        presence.show(() => setState({open: true}))
    }, [placement])

    const hide = useCallback(() => {
        presence.hide(() => setState({open: false}))
    }, [])

    useEffect(() => {
        const el = ref.current!
        el.addEventListener('mouseenter', show)
        el.addEventListener('mouseleave', hide)
        return () => {
            el.removeEventListener('mouseenter', show)
            el.removeEventListener('mouseleave', hide)
        }
    }, [ref, show, hide])

    return <>
        {cloneElement(children, {ref: ref})}
        <PortalWhen on={state.open}>
            <div onMouseEnter={show} onMouseLeave={hide} className={ccx(`absolute z-50 bg-zinc-900 opacity-75 text-sm px-1 py-0.5 rounded text-white transition-all`, className)} style={state.style}>{tooltip}</div>
        </PortalWhen>
    </>
}
