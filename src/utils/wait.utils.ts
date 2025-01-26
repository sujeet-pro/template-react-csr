export function wait<T = unknown>(
  time = 0,
  data: T,
  signal?: AbortSignal,
): Promise<T> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      return reject(new Error('Aborted'))
    }

    const timer = setTimeout(() => {
      resolve(data)
    }, time)

    if (signal) {
      signal.addEventListener('abort', () => {
        clearTimeout(timer)
        reject(new Error('Aborted'))
      })
    }
  })
}
