import { describe, it, expect, vi } from 'vitest'
import { wait } from './wait.utils'

describe('wait', () => {
  it('should resolve with the provided data after the specified time', async () => {
    const data = 'test data'
    const time = 100
    const result = await wait(time, data)
    expect(result).toBe(data)
  })

  it('should resolve immediately if time is 0', async () => {
    const data = 'immediate data'
    const result = await wait(0, data)
    expect(result).toBe(data)
  })

  it('should reject with an error if aborted before timeout', async () => {
    const data = 'test data'
    const time = 100
    const controller = new AbortController()
    const { signal } = controller

    setTimeout(() => controller.abort(), 50)

    await expect(wait(time, data, signal)).rejects.toThrow('Aborted')
  })

  it('should not resolve if aborted immediately', async () => {
    const data = 'test data'
    const time = 100
    const controller = new AbortController()
    const { signal } = controller

    controller.abort()

    await expect(wait(time, data, signal)).rejects.toThrow('Aborted')
  })
})
