import { useOutletContext } from 'react-router-dom';

export const HostVanPricing = () => {
    const {hostVanData}: any = useOutletContext();
    
    return (
        <>
            {hostVanData ? 
                <p><strong>Price:</strong> ${hostVanData.price} / Day</p>
            :  <p>Loading...</p>
            }
        </>
    )
}