import { useCallback, useState } from "react";

export function useLocalStorage<T>(key: string, defaultValue: T) {
    const [data, setData] = useState(() => {
        const lsStr = localStorage.getItem(key)
        if (lsStr) { return JSON.parse(lsStr) }
        return defaultValue
    })
    const setValue = useCallback((newValue: T) => {
        setData(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
    }, [key])
    return [data, setValue]
}