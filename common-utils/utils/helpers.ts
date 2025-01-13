export function debounce<T extends Function>(cb: T, wait = 20) {
    let h = 0;
    let callable = (...args: any) => {
        clearTimeout(h);
        h = setTimeout(() => cb(...args), wait) as any as number;
    };
    return <T>(<any>callable);
}

export function delayPromise<T>(promise: Promise<T>, delay=2000): Promise<T> {
    return new Promise<T>((resolve) => {
        promise.then(v => setTimeout(() => resolve(v), delay))
    })
}