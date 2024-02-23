export function slow(time: number) {
    const start = performance.now()
    while (performance.now() - start < time) {
        // block the main thread
    }
} 