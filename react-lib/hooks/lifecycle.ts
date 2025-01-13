import { useEffect, type EffectCallback } from "preact/hooks";

export function useMount(cb: EffectCallback) {
    return useEffect(cb, [])
}

export function useUnMount(cb: EffectCallback) {
    return useEffect(() => cb, [])
}
