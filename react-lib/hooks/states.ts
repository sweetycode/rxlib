import { useState } from "preact/hooks"

export interface ResOrErr<T> {
    res?: T
    err?: Error
}

export function useResOrError<T>(initialValue: T): [ResOrErr<T>, (res: T) => void, (err: Error) => void ] {
    const [state, setState] = useState<ResOrErr<T>>({res: initialValue})
    return [state, (res) => setState({res}), (err) => setState({err})]
}


let uniqueIdCounter = 0
export function useUniqueId(prefix: string): string {
    return useState(() => `${prefix}${++uniqueIdCounter}`)[0]
}