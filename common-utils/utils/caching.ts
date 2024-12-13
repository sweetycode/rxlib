import { LoadingMap } from "./maps"

export function cached<K, V>(calculator: (k: K) => V): (k: K) => V {
    const cache = new LoadingMap<K, V>(calculator)
    return k => cache.get(k)
}