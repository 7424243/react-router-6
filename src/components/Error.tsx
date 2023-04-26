import { useRouteError } from 'react-router-dom';

export const Error = () => {
    const error: any = useRouteError();
    
    return (
        <h1>Error: {error.message}</h1>
    )
}