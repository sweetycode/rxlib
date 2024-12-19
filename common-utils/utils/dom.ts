import { getGlobalVar, loadGlobalVar, setGlobalVar } from './globalVar';


async function addScript(script: string, inline: boolean = false): Promise<number> {
    const key = `script.${script}`
    const promise = getGlobalVar<Promise<number>>(key)
    if (promise != null) {
        const res = promise.then(n => n+1)
        setGlobalVar(key, res)
        return res
    }

    const res = new Promise<number>((resolve, reject) => {
        const el = document.createElement('script')
        if (inline) {
            el.innerHTML = script
        } else {
            el.src = script
        }
        el.onload = () => resolve(0)
        el.onerror = reject
        document.head.appendChild(el)
    });

    setGlobalVar(key, res)
    return res
}

export function addStyle(style: string, inline: boolean = false) {
    loadGlobalVar(`style.${style}`, () => {
        const el = document.createElement('link')
        el.rel = 'stylesheet'
        if (inline) {
            el.innerHTML = style
        } else {
            el.href = style
        }
        document.head.appendChild(el)
        return el
    })
}
