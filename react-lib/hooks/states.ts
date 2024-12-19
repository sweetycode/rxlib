import { useState } from "preact/hooks"

export interface ResOrErr<T> {
    res?: T
    err?: Error
}

export function useResOrError<T>(initialValue: T): [ResOrErr<T>, (res: T) => void, (err: Error) => void ] {
    const [state, setState] = useState<ResOrErr<T>>({res: initialValue})
    return [state, (res) => setState({res}), (err) => setState({err})]
}

export function useToggle(initialValue: boolean): [boolean, () => void, (value: boolean) => void] {
    const [value, setValue] = useState<boolean>(initialValue)
    return [
        value,
        () => setValue(v => !v),
        setValue,
    ]
}


export function useObjectState<T extends {}>(initialValue: T): [T, (partial: Partial<T>) => void] {
    const [state, setState] = useState<T>(initialValue)

    return [state, (partial) => setState(s => ({...s, ...partial}))]
}
