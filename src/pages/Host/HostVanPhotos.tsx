import { useOutletContext } from 'react-router-dom';

export const HostVanPhotos = () => {
    const {hostVanData}: any = useOutletContext();
    
    return (
        <>
            {hostVanData ? <img src={hostVanData.imageUrl} alt={hostVanData.name} style={{width: 400, height: 400}}/> : <p>Loading...</p>}
        </>
    )
}