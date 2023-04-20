import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Vans = () => {
    const [data, setData] = useState<any>([])

    const fetchData = async () => {
        const res = await fetch('/api/vans');
        const jsonData = await res.json();
        setData(jsonData.vans)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <h1>Explore Our Van Options</h1>
            <ul style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 0}}>
                {data.map((van: any) => (
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