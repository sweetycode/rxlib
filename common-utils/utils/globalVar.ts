const _vars = (() => {
    let vars = (globalThis as any)._vars as Map<string, any>
    if (vars != null) {
        return vars
    }
    return (globalThis as any)._vars = new Map<string, any>()
})()

export function getGlobalVar<T>(key: string, defaultValue?: T|(()=>T)): T|null {
    let res = _vars.get(key)
    if (res != null) {
        return res
    }

    return defaultValue instanceof Function ? defaultValue(): (defaultValue ?? null)
}

export function loadGlobalVar<T>(key: string, defaultValue: T|(() => T)): T {
    let res = _vars.get(key)
    if (res != null) {
        return res
    }
    res = defaultValue instanceof Function ? defaultValue(): defaultValue
    _vars.set(key, res)
    return res
}

export function setGlobalVar<T>(key: string, value: T) {
    _vars.set(key, value)
}

export function removeGlobalVar(key: string) {
    _vars.delete(key)
}

export function incrGlobalVar(key: string, increment: number = 1): number {
    var res = _vars.get(key) as number ?? 0
    res += increment
    _vars.set(key, res)
    return res
}

export function nextUniqueID(namespace: string): string {
    const n = incrGlobalVar(`_uniq.${namespace}`)
    return `${namespace}-${n}`
}
