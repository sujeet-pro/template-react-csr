/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';


export function useDebounceCallback<T extends (...args: any) => void>(callback: T, delay: number): T {
    const timeoutRef = useRef<string | number | NodeJS.Timeout | undefined>(undefined);

    const debouncedCallback = (...args: any) => {
        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };

    return debouncedCallback as T;
}