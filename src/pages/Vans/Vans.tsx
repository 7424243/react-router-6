import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import { fetchVans } from '../../api';

export const loader = () => {
    return fetchVans()
}

export const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const loaderData: any = useLoaderData();

    // const [error, setError] = useState<any>(null);

    const typeFilter = searchParams.get('type')

    const handleFilterChange = (key: any, value: any) => {
        setSearchParams(prevParams => {
            if (value===null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    const filteredVans = typeFilter ? loaderData.filter((van: any) => van.type === typeFilter) : loaderData;

    const filterButtonStyle = {
        textDecoration: 'none', 
        color: 'black', 
        marginRight: '1%', 
        padding: 5,
    }

    return (
        <>
            {/* {error && <h1>There was an error: `${error}`</h1>} */}
            <h1>Explore Our Van Options</h1>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <button onClick={() => handleFilterChange('type', 'luxury')} style={{...filterButtonStyle}}>Luxury</button>
                <button onClick={() => handleFilterChange('type', 'rugged')} style={{...filterButtonStyle}}>Rugged</button>
                <button onClick={() => handleFilterChange('type', 'simple')} style={{...filterButtonStyle}}>Simple</button>
                {typeFilter && <button onClick={() => handleFilterChange('type', null)} style={{...filterButtonStyle}}>Clear Filters</button>}
            </div>
            <ul style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 0}}>
                {filteredVans.map((van: any) => (
                    <Link key={van.id} to={van.id} state={{search: searchParams.toString()}} style={{textDecoration: 'none', color: 'black' , marginBottom: '1.5%', marginRight: '1%'}}>
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