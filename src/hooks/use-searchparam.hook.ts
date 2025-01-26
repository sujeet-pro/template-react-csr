import { useCallback } from 'react'
import { useSearchParams } from 'react-router'

export function useSearchParam(key: string) {
  const [searchParams, setSearchParams] = useSearchParams()
  const setSearchParam = useCallback(
    (value: string) => {
      const newSearchParams = new URLSearchParams(searchParams)
      newSearchParams.set(key, value)
      setSearchParams(newSearchParams)
    },
    [searchParams, setSearchParams, key],
  )
  return [searchParams.get(key), setSearchParam] as const
}
