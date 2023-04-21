import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import { navBarStyles } from '../../components/styles';

export const HostVanDetailLayout = () => {
    const [hostVanData, setHostVanData] = useState<any>(null);

    const { id } = useParams();

    const fetchHostVanData = async () => {
        const res = await fetch(`/api/host/vans/${id}`)
        const jsonRes = await res.json();
        setHostVanData(jsonRes.vans[0])
    }

    useEffect(() => {
        fetchHostVanData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div style={{padding: '1%'}}>
            <Link to='/host/vans' relative='path' style={{backgroundColor: 'white', fontSize: 30, marginTop: 20, textDecoration: 'none'}}>
                🔙
            </Link>
            {hostVanData ? (
                <div style={{backgroundColor: 'lightgrey', padding: '1%', marginTop: 20,}}>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '2%'}}>
                        <div>
                            <img src={hostVanData.imageUrl} alt={hostVanData.name} style={{width: 200, height: 200}}/>
                        </div>
                        <div style={{marginLeft: 20}}> 
                            <p style={{border: 'solid', width: 55}}>{hostVanData.type}</p>
                            <h2>{hostVanData.name}</h2>
                            <p>$ {hostVanData.price} / Day</p>
                        </div>
                    </div>
                    <nav style={{marginBottom: '2%'}}>
                        <NavLink 
                            end
                            to={`.`}                     
                            style={({isActive}) => (
                                navBarStyles(isActive)
                            )}
                        >
                            Details
                        </NavLink>
                        <NavLink 
                            to={`pricing`}                     
                            style={({isActive}) => (
                                navBarStyles(isActive)
                            )}
                        >
                            Pricing
                        </NavLink>
                        <NavLink 
                            to={`photos`}                     
                            style={({isActive}) => (
                                navBarStyles(isActive)
                            )}
                        >
                            Photos
                        </NavLink>
                    </nav>
                    <div style={{marginLeft: 20}}>
                        <Outlet context={{hostVanData}}/>
                    </div>
                </div>
            ): <h2>Loading...</h2>}
        </div>
    )
}