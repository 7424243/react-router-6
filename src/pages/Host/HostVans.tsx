import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const HostVans = () => {
    const [hostVansData, setHostVansData] = useState<any>(null);

    const fetchHostVansData = async () => {
        const res = await fetch('/api/host/vans')
        const jsonRes = await res.json();
        setHostVansData(jsonRes.vans);
    }

    useEffect(() => {
        fetchHostVansData();
    }, [])

    return (
        <>
         <h1>Your Listed Vans</h1>
         {!hostVansData && <h2>Loading...</h2>}
         {hostVansData && hostVansData.map((hostVan: any) => {
            return (
                <Link to={hostVan.id} key={hostVan.id} style={{display: 'flex', flexDirection: 'row', backgroundColor: 'lightgray', width: 500, marginBottom: 20, textDecoration: 'none', color: 'black'}}>
                    <div>
                        <img src={hostVan.imageUrl} alt={hostVan.name} style={{width: 200, height: 200}}/>
                    </div>
                    <div>
                        <h2>{hostVan.name}</h2>
                        <p>${hostVan.price} / Day</p>
                    </div>
                </Link>
            )
         })}
        </>
    )
}