export function blockingTask(time: number) {
  const end = performance.now() + time
  while (performance.now() < end) {
    // block the main thread
  }
}
