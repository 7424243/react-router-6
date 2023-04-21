import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [data, setData] = useState<any>([])

    const typeFilter = searchParams.get('type')

    const fetchData = async () => {
        const res = await fetch('/api/vans');
        const jsonData = await res.json();
        setData(jsonData.vans)
    }

    useEffect(() => {
        fetchData();
    }, [])

    const filteredVans = typeFilter ? data.filter((van: any) => van.type === typeFilter) : data;

    return (
        <>
            <h1>Explore Our Van Options</h1>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <button onClick={() => setSearchParams({type: 'luxury'})} style={{textDecoration: 'none', color: 'black', marginRight: '1%', padding: 5}}>Luxury</button>
                <button onClick={() => setSearchParams({type: 'rugged'})} style={{textDecoration: 'none', color: 'black', marginRight: '1%', padding: 5}}>Rugged</button>
                <button onClick={() => setSearchParams({type: 'simple'})} style={{textDecoration: 'none', color: 'black', marginRight: '1%', padding: 5}}>Simple</button>
                <button onClick={() => setSearchParams({})} style={{textDecoration: 'none', color: 'black', marginRight: '1%', padding: 5}}>Clear Filters</button>
            </div>
            <ul style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 0}}>
                {filteredVans.map((van: any) => (
                    <Link key={van.id} to={`/vans/${van.id}`} style={{textDecoration: 'none', color: 'black' , marginBottom: '1.5%', marginRight: '1%'}}>
                        <li style={{listStyleType: 'none'}}>
                            <div>
                                <img alt={van.name} src={van.imageUrl} style={{width: 300, height: 300}}/>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <h2>{van.name}</h2>
                                <p>${van.price} / day</p>
                            </div>
                            <p style={{borderStyle: 'solid', borderColor: 'grey', borderWidth: 2, borderRadius: '10%', width: 75}}>{van.type}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </>
    )
}