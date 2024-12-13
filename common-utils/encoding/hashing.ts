import {base64Decode as b64dec, base64Encode as b64enc} from './base64'

export function base64Encode(s: string): string {
    return b64enc(new TextEncoder().encode(s))
}

export function base64Decode(s: string): string {
    return new TextDecoder().decode(b64dec(s))
}

async function digest(s: string, algo: 'SHA-1'|'SHA-256'): Promise<string> {
    return window.crypto.subtle.digest(algo, new TextEncoder().encode(s))
        .then(buffer => hex(new Uint8Array(buffer)))
}

export function hex(array: Uint8Array) {
    return [...array].map(x => x.toString(16).padStart(2, '0')).join('')
}

export function sha1(s: string): Promise<string> {
    return digest(s, 'SHA-1')
}

export function sha256(s: string): Promise<string> {
    return digest(s, 'SHA-256')
}
