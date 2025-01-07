import { useEffect, useRef } from "preact/hooks"
import { installMonacoEditor } from "./install"
import { ccx } from '../../common-utils/cx/index';


interface MonacoEditorProps {
    className?: string
    value?: string,
    language?: string,
    fontSize?: number
    lineNumbers?: LineNumbersType
    theme?: string,
    readOnly?: boolean
}

type LineNumbersType = "on" | "off" | "relative"

const defaultOptions = {
    automaticLayout: true,
    fontSize: 18,
    lineNumbers: 'on',
    readOnly: false,
}

export function MonacoEditor({className, ...options}: MonacoEditorProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const editorRef = useRef<any>()

    useEffect(() => {
        installMonacoEditor().then(monaco => {
            editorRef.current = monaco.editor.create(containerRef.current, {
                ...defaultOptions,
                ...options,
            })
        })
        return () => {
            if (editorRef.current) {
                editorRef.current.dispose()
                editorRef.current = null
            }
        }
    }, [])

    // todo: add more update effects
    return <div ref={containerRef} className={ccx('min-h-20', className)}></div>
}


interface ManacoDiffEditorProps {

}

export function MonacoDiffEditor({}) {
    return <div>
        
    </div>
}