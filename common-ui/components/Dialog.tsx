import { cloneElement, createContext, type ComponentChildren, type ComponentProps, type VNode } from "preact";
import { useContext, useState } from "preact/hooks";
import { Portal } from "./Portal";
import { ccx } from "common-utils/cx";
import type { CcProps, ChProps } from "common-ui/types";

interface DialogContextType {
    open: boolean
    setOpen: (open: boolean) => void
}

const DialogContext = createContext<DialogContextType>({open: false, setOpen: ()=>{}})


const theme = {
    overlay: `fixed inset-0 z-50 bg-black/80 w-full h-16`,
    content: `fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200`,
    header: ``,
    title: ``,
    description: ``,
    footer: ``
}

function Dialog({children}: ChProps) {
    const [open, setOpen] = useState<boolean>(false)
    return <DialogContext.Provider value={{open, setOpen}}>
        {children}
    </DialogContext.Provider>
}

function Trigger({children}: ChProps<VNode>) {
    const {setOpen} = useContext(DialogContext)
    return cloneElement(children, {onClick: () => setOpen(true)})
}

function Content({className, children}: CcProps) {
    const {open, setOpen} = useContext(DialogContext)
    return open && <Portal>
        <Overlay onClick={() => setOpen(false)}/>
        <div className={ccx(theme.content, className)}>
            {children}
        </div>
    </Portal>
}

function Header({className, ...props}: ComponentProps<'div'>) {
    return <div className={ccx(theme.header, className as string)} {...props}></div>
}

function Title({className, ...props}: ComponentProps<'div'>) {
    return <div className={ccx(theme.title, className as string)} {...props}></div>
}

function Description({className, ...props}: ComponentProps<'div'>) {
    return <div className={ccx(theme.description, className as string)} {...props}></div>
}

function Footer({className, ...props}: ComponentProps<'div'>) {
    return <div className={ccx(theme.footer, className as string)} {...props}></div>
}

function Close({children}: {children: VNode<any>}) {
    const {setOpen} = useContext(DialogContext)
    return cloneElement(children, {onClick: () => setOpen(false)})
}


function Overlay({onClick}: {onClick?: () => any}) {
    return <div className={theme.overlay} onClick={onClick}>
    </div>
}


export default Object.assign(Dialog, {
    Trigger,
    Content,
})


export function DialogDemo() {

}
