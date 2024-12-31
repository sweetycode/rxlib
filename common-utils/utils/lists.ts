
export function lastElementOf<T>(arr: T[], defaultValue?: T): T|undefined {
    const len = arr.length
    return len === 0? defaultValue: arr[len - 1]
}