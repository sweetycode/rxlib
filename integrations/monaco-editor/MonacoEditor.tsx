import { useEffect, useRef, useState } from "preact/hooks"
import { installMonacoEditor } from "./install"
import { ccx } from '../../common-utils/cx/index';
import { debounce } from "common-utils/utils/helpers";
import { useToggleOnce } from "react-lib/hooks/states";
import Skeleton from "common-ui/elements/Skeleton";
import { useMount } from "react-lib/hooks/lifecycle";
import { delayPromise } from '../../common-utils/utils/helpers';


interface MonacoEditorProps {
    className?: string
    value?: string,
    placeholder?: string,
    onChange?: (value: string) => void,
    language?: string,
    options?: MonacoEditorOptions
}

export interface MonacoEditorOptions {
    automaticLayout?: boolean
    fontSize?: number
    lineNumbers?: LineNumbersType
    theme?: string,
    readOnly?: boolean
    lineNumbersMinChars?: number
    // https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorMinimapOptions.html
    minimap?: {autohide?: boolean, enabled?: boolean}
    renderWhitespace?: 'all'|'none'|'boundary'|'selection'|'trailing',
}

const defaultMonacoEditorOptions = {
    automaticLayout: true,
    fontSize: 18,
    lineNumbers: 'on',
    readOnly: false,
}


type LineNumbersType = "on" | "off" | "relative"


export function MonacoEditor({className, value = '', placeholder, language, options, onChange}: MonacoEditorProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const editorRef = useRef<any>(null)
    const [isReady, setReady] = useToggleOnce()
    const stateRef = useRef<{value: string, language?: string}>({value: value, language: language})

    useEffect(() => {
        delayPromise(installMonacoEditor()).then(monaco => {
            const editor = editorRef.current = monaco.editor.create(containerRef.current, {
                value: stateRef.current.value,
                language: stateRef.current.language,
                placeholder,
                ...defaultMonacoEditorOptions,
                ...options,
            })
            if (onChange) {
                editor.getModel().onDidChangeContent(debounce(() => {
                    onChange(stateRef.current.value = editor.getModel().getValue())
                }, 200))
            }
            setReady()
        })
        return () => {
            if (editorRef.current != null) {
                editorRef.current.dispose()
                editorRef.current = null
            }
        }
    }, [])

    useEffect(() => {
        if (stateRef.current.value != value) {
            stateRef.current.value = value
            if (editorRef.current != null) {
                editorRef.current.getModel().setValue(value)
            }
        }
        
        if (stateRef.current.language != language) {
            stateRef.current.language = language
            if (editorRef.current != null) {
                editorRef.current.getModel().setLanguage(language)
            }
        }
    }, [value, language])


    // todo: add more update effects
    return <div ref={containerRef} className={ccx('min-h-20', className)}>
        {!isReady && <LoadingIndicator/>}
    </div>
}

const CONDIDATE_SIZES = ['w-1/5', 'w-2/5', 'w-3/5', 'w-1/4', 'w-1/2', 'w-1/3']

function LoadingIndicator({className}: {className?: string}) {
    const [sizes] = useState(() => {
        const n = Math.floor(3 + Math.random() * 4)
        return [...Array(n)].map(() => {
            const i = Math.floor(Math.random() * CONDIDATE_SIZES.length);
            return CONDIDATE_SIZES[i]
        })
    })
    return <div className={ccx(`space-y-1 flex flex-col`, className)}>
        {sizes.map(size => <Skeleton className={`${size} h-4 rounded-sm`}/>)}
    </div>
}

interface ManacoDiffEditorProps {
    className?: string
    left?: string
    right?: string
    onLeftChange?: (value: string)=> void,
    onRightChange?: (value: string)=> void,
}

export function MonacoDiffEditor({className, left='', right='', onLeftChange, onRightChange}: ManacoDiffEditorProps) {
    const containerRef = useRef(null)
    const editorRef = useRef<any>(null)
    const stateRef = useRef<{left?: string, right?: string}>({
        left, right
    })
    const [isReady, setReady] = useToggleOnce()

    useMount(() => {
        installMonacoEditor().then(monaco => {
            const editor = editorRef.current = monaco.editor.createDiffEditor(
                containerRef.current,
                {
                    originalEditable: true,
                    automaticLayout: true,
                    fontSize: 18,
                    lineNumbersMinChars: 1
                }
            )
            const {left, right} = stateRef.current
            const leftModel = monaco.editor.createModel(left, `text/plain`)
            const rightModel = monaco.editor.createModel(right, `text/plain`)
            editor.setModel({original: leftModel, modified: rightModel})

            if (onLeftChange) {
                leftModel.onDidChangeContent(debounce(() => {
                    onLeftChange(stateRef.current.left = leftModel.getValue())
                }, 300))
            }

            if (onRightChange) {
                rightModel.onDidChangeContent(debounce(() => {
                    onRightChange(stateRef.current.right = rightModel.getValue())
                }, 300))
            }

            setReady()
        })
    
        return () => {
            if (editorRef.current) {
                editorRef.current.dispose()
                editorRef.current = null
            }
        }
    })

    useEffect(() => {
        if (stateRef.current.left != left) {
            stateRef.current.left = left
            if (editorRef.current) {
                const {original} = editorRef.current.getModel()
                original.setValue(left)
            }
        }
        if (stateRef.current.right != right) {
            stateRef.current.right = right
            if (editorRef.current) {
                const {modified} = editorRef.current.getModel()
                modified.setValue(right)
            }
        }
    }, [left, right])

    return <div ref={containerRef} className={className}>
        {!isReady && <div className="flex gap-2">
            <LoadingIndicator className="grow"/>
            <LoadingIndicator className="grow"/>
        </div>}
    </div>
}
