import { useEffect, useState } from "preact/hooks"
import { isOnClient } from "../utils"
import { fastParse, fastStringify } from "common-utils/encoding/fastenc"

function castUndefineToNull<T>(v: T): NonNullable<T>|null  {
    return v == null ? null: v
}

class MemoryStorage implements Storage {
    value = new Map<string, string>

    getItem(key: string): string | null {
        return castUndefineToNull(this.value.get(key))
    }

    setItem(key: string, value: string): void {
        this.value.set(key, value)
    }

    removeItem(key: string): void {
        this.value.delete(key)
    }

    key(index: number): string | null {
        const entry = Array.from(this.value.entries())[index]
        return entry == null ? null: entry[0]
    }

    get length(): number {
        return this.value.size
    }

    clear(): void {
        this.value.clear()
    }
}

const safeSessionStorage = isOnClient() ? sessionStorage: new MemoryStorage()
const safeLocalStorage = isOnClient()?localStorage: new MemoryStorage()

function useStorageState<T>(storage: Storage, key: string, initialValue: T|(()=>T)): [T, (newValue: T) => void, () => void] {
    const [state, setState] = useState<T>(initialValue)

    useEffect(() => {
        const value = storage.getItem(key)
        if (value != null) {
            setState(fastParse(value) as T)
        }
    }, [])

    return [state, (value: T) => {
        storage.setItem(key, fastStringify(value))
        setState(value)
    }, () => storage.removeItem(key)]
}


export function useSessionState<T>(key: string, initialValue: T|(()=>T)) {
    return useStorageState(safeSessionStorage, key, initialValue)
}

export function useLocalState<T>(key: string, initialValue: T) {
    return useStorageState(safeLocalStorage, key, initialValue)
}