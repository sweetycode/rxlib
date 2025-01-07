export function resolveValue<T>(value: T|(() => T)): T {
    return typeof value === 'function' ? (value as () => T)(): value
}