import { Link, useLoaderData } from 'react-router-dom';
import { fetchHostVans } from '../../api';

export const loader = () => {
    return fetchHostVans();
}

export const HostVans = () => {
    const hostVansData: any = useLoaderData();

    return (
        <>
         <h1>Your Listed Vans</h1>
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