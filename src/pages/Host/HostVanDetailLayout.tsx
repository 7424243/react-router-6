import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import { navBarStyles } from '../../components/styles';
import { BackLink } from '../../components/BackLink';
import { fetchHostVans } from '../../api';

export const loader = ({params}: any) => {
    return fetchHostVans(params.id);
}

export const HostVanDetailLayout = () => {
    const [hostVanData]: any = useLoaderData();

    return (
        <div style={{padding: '1%'}}>
            <BackLink to={'/host/vans'}/>
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
        </div>
    )
}