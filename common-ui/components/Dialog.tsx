
/**
 * <Dialog>
 *  <DialogTrigger>...</DialogTrigger>
 *  <DialogContent>
 *    
 *  </DialogContent>
 * </Dialog>
 */

import {  createContext, type ComponentChildren, type VNode } from "preact";
import { useContext, useState } from "preact/hooks";
import { SlotClone } from "./SlotClone";
import { Portal } from "./Portal";

interface DialogContext {
    open: boolean
    setOpen: (open: boolean) => void
}

const Context = createContext<DialogContext>({open: false, setOpen: ()=>{}})

export function Dialog({children}: {children: ComponentChildren}) {
    const [open, setOpen] = useState<boolean>(false)
    return <Context.Provider value={{open, setOpen}}>
        {children}
    </Context.Provider>
}

export function DialogTrigger({children}: {children: VNode<any>}) {
    const {setOpen} = useContext(Context)
    return <SlotClone target={children} onClick={() => setOpen(true)}/>
}

export function DialogContent({children}: {children: ComponentChildren}) {
    const {open, setOpen} = useContext(Context)
    function handleOverlayClick() {

    }
    return open && <Portal>
        <DialogOverlay onClick={() => setOpen(false)}/>
        {children}
    </Portal>
}

export function DialogHeader() {

}

export function DialogTitle() {

}

export function DialogDescription() {

}

export function DialogFooter() {

}

export function DialogClose({children}: {children: VNode<any>}) {
    const {setOpen} = useContext(Context)
    return <SlotClone target={children} onClick={() => setOpen(false)}/>
}

function DialogOverlay({onClick}: {onClick?: () => any}) {
    return <div className="fixed inset-0 z-50 bg-black/80 w-full h-16" onClick={onClick}>
    </div>
}