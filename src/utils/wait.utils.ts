export function wait<T = unknown>(time = 0, data: T): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, time)
    })
}