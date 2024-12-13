
export function base64Encode(bytes: Uint8Array): string {
    return btoa(String.fromCodePoint(...bytes))
}

export function base64Decode(b64Str: string): Uint8Array {
    return Uint8Array.from(atob(b64Str).split('').map(c => c.charCodeAt(0)))
}
