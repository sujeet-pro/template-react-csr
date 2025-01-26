import { describe, it, expect, vi } from 'vitest'
import { blockingTask } from './task.utils'

describe('blockingTask', () => {
  it('should block the main thread for the specified time', () => {
    const time = 100 // 100 milliseconds
    const start = performance.now()
    blockingTask(time)
    const end = performance.now()
    expect(end - start).toBeGreaterThanOrEqual(time)
  })

  it('should not block the main thread for less than the specified time', () => {
    const time = 100 // 100 milliseconds
    const start = performance.now()
    blockingTask(time)
    const end = performance.now()
    expect(end - start).toBeLessThan(time + 10) // Allowing a small margin of error
  })
})
