/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useCallback } from 'react'

export function useDebounceCallback<T extends (...args: any) => void>(
  callback: T,
  delay: number,
) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay],
  )

  return debouncedCallback
}
