import { renderHook, act } from '@testing-library/react'
import { useDebounceCallback } from './use-debounce-callback'
import { describe, it, expect, vi } from 'vitest'

vi.useFakeTimers()

describe('useDebounceCallback', () => {
  it('should debounce the callback', () => {
    const callback = vi.fn()
    const { result } = renderHook(() => useDebounceCallback(callback, 500))

    act(() => {
      result.current()
      result.current()
      result.current()
    })

    expect(callback).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(500)
    })

    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should call the callback with the latest arguments', () => {
    const callback = vi.fn()
    const { result } = renderHook(() => useDebounceCallback(callback, 500))

    act(() => {
      result.current('first')
      result.current('second')
      result.current('third')
    })

    act(() => {
      vi.advanceTimersByTime(500)
    })

    expect(callback).toHaveBeenCalledWith('third')
  })

  it('should reset the timer if called again within the delay', () => {
    const callback = vi.fn()
    const { result } = renderHook(() => useDebounceCallback(callback, 500))

    act(() => {
      result.current()
      vi.advanceTimersByTime(300)
      result.current()
      vi.advanceTimersByTime(300)
    })

    expect(callback).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(200)
    })

    expect(callback).toHaveBeenCalledTimes(1)
  })
})
