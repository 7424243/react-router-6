import { useOutletContext } from 'react-router-dom'

export const HostVanDetail = () => {
    const {hostVanData}: any = useOutletContext();

    return (
        <>
            {hostVanData ? (
                <div>
                        <p><strong>Name:</strong> {hostVanData.name}</p>
                        <p><strong>Category:</strong> {hostVanData.type}</p>
                        <p><strong>Description:</strong> {hostVanData.description}</p>
                        <p><strong>Visibility:</strong> Public</p>
                    </div>
                ) : <p>Loading...</p>
            }
        </>
    )
}