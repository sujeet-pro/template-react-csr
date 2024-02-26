import { useState, useEffect } from 'react';

type FetchOptions = RequestInit & {
    // You can extend RequestInit with any additional options you want to support
    resetDataOnNewRequest?: boolean
}
export type useFetchResult<T> = { data: T | null, loading: boolean, error: Error | null }

export function useFetch<T>(url: string | null, options?: FetchOptions): useFetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (url === null) return () => { }
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async (): Promise<void> => {
            try {
                const { resetDataOnNewRequest, ...fetchOptions } = options || {}
                setLoading(true);
                setError(null)
                if (resetDataOnNewRequest) {
                    setData(null)
                }
                const response = await fetch(url, { signal, ...fetchOptions });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData: T = await response.json();
                if (!signal.aborted) {
                    setData(responseData);
                }
            } catch (error: unknown) {
                if (!signal.aborted) {
                    setError(error as Error);
                }
            } finally {
                if (!signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            abortController.abort();
        };
    }, [url, options]);

    return { data, loading, error };
}