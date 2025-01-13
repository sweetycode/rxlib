export function parseSearchParams(queryString?: string): Record<string, string> {
    if (!globalThis?.location?.search) {
        return {}
    }

    const params = new URLSearchParams(queryString ?? window.location.search)
    let result: Record<string, string> = {}
    params.entries().forEach(([key, value]) => {
        result[key] = value
    })
    return result
}