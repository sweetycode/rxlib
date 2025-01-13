import { useState } from "preact/hooks"

export interface ResOrErr<T> {
    res?: T
    err?: Error
}

export function useBiState<T1, T2>(a: T1): [[a: T1|null, (a: T1) => void], [b: T2|null,  (b: T2) => void]] {
    const [state, setState] = useState<[T1|null, T2|null]>([a, null])
    return [
        [state[0], (a: T1) => setState([a, null])],
        [state[1], (b: T2) => setState([null, b])],
    ]
}


export function useToggleOnce(): [boolean, () => void] {
    const [state, setState] = useState(false)
    return [state, () => setState(true)]
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
