import { useLoaderData, useLocation } from 'react-router-dom'
import { BackLink } from '../../components/BackLink';
import { fetchVans } from '../../api';

export const loader = ({params}: any) => {
    return fetchVans(params.id)
}

export const VanDetail = () => {
    const vanDetails: any = useLoaderData();
    const {state: linkState} = useLocation();

    return (
        <>
            <BackLink to={`..?${linkState.search}`} />
            <img src={vanDetails.imageUrl} alt={vanDetails.name} style={{width: 500, height: 500}}/>
            <h1>{vanDetails.name}</h1>
        </>
    )
}