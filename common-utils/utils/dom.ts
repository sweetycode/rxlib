const installedScripts = new Map<string, Promise<any>>()
const installedStyles = new Set<string>()

export async function installScript<T=void>(script: string, inline = false, initialize?: () => Promise<T>): Promise<T> {
    const cachedVal = installedScripts.get(script)
    if (cachedVal != null) {
        return cachedVal
    }

    const result = new Promise<T>((resolve, reject) => {
        const el = document.createElement('script')
        if (inline) {
            el.innerHTML = script
        } else {
            el.src = script
        }
        el.onload = () => {initialize != null ? initialize().then(resolve): resolve(null as T)}
        el.onerror = reject
        document.head.appendChild(el)
    })
    installedScripts.set(script, result)

    return result
}


export function installStyle(style: string, inline = false) {
    const exist = installedStyles.has(style)
    if (exist) {
        return
    }
    const el = document.createElement('link')
    el.rel = 'stylesheet'
    if (inline) {
        el.innerHTML = style
    } else {
        el.href = style
    }
    document.head.appendChild(el)

    installedStyles.add(style)
}
