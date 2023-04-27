export const fetchVans = async (vanId?: number) => {
    const url = vanId ? `/api/vans/${vanId}` : "/api/vans";
    const res = await fetch(url);

    if (!res.ok) {
        // eslint-disable-next-line no-throw-literal
        throw {
            message: 'Failed to fetch vans',
            statusText: res.statusText,
            status: res.status,
        }
    }

    const jsonData = await res.json();
    return jsonData.vans;
}

export const fetchHostVans = async (vanId?: number) => {
    const url = vanId ? `/api/host/vans/${vanId}` : "/api/host/vans";
    const res = await fetch(url);

    if (!res.ok) {
        // eslint-disable-next-line no-throw-literal
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status,
        }
    }
    
    const jsonData = await res.json();
    return jsonData.vans;
}