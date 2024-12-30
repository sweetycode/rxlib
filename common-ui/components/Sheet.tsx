import { cloneElement, createContext, type ComponentChildren, type VNode } from "preact"
import { Portal, PortalWhen } from "./Portal"
import { ccx } from "common-utils/cx"
import { useContext, useState, type Dispatch, type StateUpdater } from "preact/hooks"
import { asComponent, type CcProps, type CnProps } from "common-ui/decl"


const theme = {
    sheet: ``,
    overlay: `fixed inset-0 z-50 bg-black/80 `,
    content: `fixed z-50 inset-y-0 gap-4 bg-white p-6 shadow-lg transition ease-in-out right-0 h-full w-3/4 border-l sm:max-w-sm data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=open]:slide-in-from-right`,
    title: `text-lg font-semibold text-zinc-900`,
    description: `text-sm text-zinc-500 mt-2`,
}


interface SheetContextType {
    open: boolean
    setOpen: Dispatch<StateUpdater<boolean>>
}

const SheetContext = createContext<SheetContextType>({open: false, setOpen: () => {}})


function Sheet({children}: {className?: string, children: ComponentChildren}) {
    const [open, setOpen] = useState<boolean>(false)
    return <SheetContext.Provider value={{open, setOpen}}>
        {children}
    </SheetContext.Provider>
}

function Trigger({children, asChild, className}: {children: VNode, asChild?: boolean, className?: string}) {
    const {setOpen} = useContext(SheetContext)
    return asChild? cloneElement(children, {onClick: () => {setOpen(v => !v)}})
        : <button className={className} onClick={() => setOpen(v => !v)}>{children}</button>
}


function Content({children, className}: {className?: string, children: ComponentChildren}) {
    const {open} = useContext(SheetContext)
    return <PortalWhen on={open}>
        <Overlay/>
        <div className={ccx(theme.content, className)} {...{'data-state': 'open'}}>
            <Close className=""></Close>
            {children}
        </div>
    </PortalWhen>
}


function Overlay() {
    const {setOpen} = useContext(SheetContext)
    return <div className={theme.overlay} onClick={() => setOpen(false)}></div>
}

const Header = asComponent('div')
const Title = asComponent('div', theme.title)
const Description = asComponent('div', theme.description)

function Footer() {

}

function Close({className, children}: CcProps) {
    return <button className={className}>{children}</button>
}

export default Object.assign(Sheet, {
    Trigger,
    Content,
    Header,
    Title, 
    Description,
    Footer,
    Close,
})