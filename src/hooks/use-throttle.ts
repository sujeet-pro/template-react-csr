/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from 'react'

export function throttle<T extends (...args: any) => void>(
  cb: T,
  interval: number,
) {
  let lastTime = 0
  const throttledCallback = (...args: any): void => {
    const now = Date.now()
    if (now - lastTime >= interval) {
      cb(...args)
      lastTime = now
    }
  }

  return throttledCallback
}

export function useThrottle(cb: (...args: any) => void, interval: number) {
  const lastExecuted = useRef<null | number>(null)

  return useCallback(
    (...args: any) => {
      const now = Date.now()
      if (!lastExecuted.current || lastExecuted.current - now >= interval) {
        lastExecuted.current = now
        cb(...args)
      }
    },
    [interval, cb],
  )
}
