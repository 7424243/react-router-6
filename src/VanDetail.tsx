import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

export const VanDetail = () => {
    const [vanDetails, setVanDetails] = useState<any>(null)
    const params = useParams();

    const fetchVanData = async () => {
        const res = await fetch(`/api/vans/${params.id}`)
        const jsonData = await res.json();
        console.log('jsonData: ', jsonData.vans)
        setVanDetails(jsonData.vans)
    }

    useEffect(() => {
        fetchVanData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id])

    return (
        <>
            {vanDetails ? (
                <>
                    <img src={vanDetails.imageUrl} alt={vanDetails.name} style={{width: 500, height: 500}}/>
                    <h1>{vanDetails.name}</h1>
                </>
            ) : <h1>Loading...</h1>
            }
        </>
    )
}