const request = async (method: string, loc: string, body?: {}) => {
    const res = await fetch('/api' + loc, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    try {
        return { status: res.status, body: await res.json() };
    } catch {
        return { status: res.status };
    }
};

export { request };
