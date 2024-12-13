export class LoadingMap<K, V> extends Map<K, V> {
    private loader: (k: K) => V

    constructor(loader: (k: K) => V, entries: [K,V][] = []) {
        super(entries)
        this.loader = loader
    }

    get(k: K): V {
        let val = super.get(k)
        if (val == null) {
            val = this.loader(k)
            this.set(k, val)
        }
        return val
    }
}