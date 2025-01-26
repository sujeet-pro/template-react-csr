import { renderHook, act } from '@testing-library/react'
import { useDebounce } from './use-debounce'
import { describe, it, expect, vi } from 'vitest'

describe('useDebounce', () => {
  vi.useFakeTimers()

  it('should initialize with the initial value', () => {
    const { result } = renderHook(() => useDebounce('initial', 500))
    expect(result.current).toBe('initial')
  })

  it('should debounce the value', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 },
      },
    )

    rerender({ value: 'updated', delay: 500 })

    // Value should not change immediately
    expect(result.current).toBe('initial')

    // Fast-forward time
    act(() => {
      vi.advanceTimersByTime(500)
    })

    // Value should be updated after the delay
    expect(result.current).toBe('updated')
  })

  it('should reset the debounce timer if value changes within the delay period', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 },
      },
    )

    rerender({ value: 'updated1', delay: 500 })

    // Fast-forward time by 300ms
    act(() => {
      vi.advanceTimersByTime(300)
    })

    // Value should not change yet
    expect(result.current).toBe('initial')

    rerender({ value: 'updated2', delay: 500 })

    // Fast-forward time by another 300ms
    act(() => {
      vi.advanceTimersByTime(300)
    })

    // Value should still not change yet
    expect(result.current).toBe('initial')

    // Fast-forward time by 200ms to complete the 500ms delay
    act(() => {
      vi.advanceTimersByTime(200)
    })

    // Value should be updated to the latest value
    expect(result.current).toBe('updated2')
  })
})
