import { resolveValue } from "./func";


export function createGlobalState<T>(initialValue: T|(() => T)): [
    () => T,
    (value: T) => void,
] {
    const holder = [resolveValue(initialValue)]
    return [() => holder[0], (value: T) => holder[0] = value]
}
