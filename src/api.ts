export const fetchVans = async () => {
    const res = await fetch('/api/vans');
    const jsonData = await res.json();
    return jsonData.vans;
}