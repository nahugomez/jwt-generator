export function request<TResponse>(url: string, config: RequestInit = {}): Promise<TResponse> {
    return fetch(url, config)
        .then((res) => res.json())
        .then((data) => data as TResponse)
        .catch((error) => {
            throw new Error(error);
        });
}
