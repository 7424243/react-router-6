import { Link, Outlet } from 'react-router-dom'

export const HostLayout = () => {
    return (
        <>
            <nav style={{display: 'flex'}}>
                <Link to='/host' style={{ textDecoration: 'none' }}>Dashboard</Link>
                <Link to='/host/income' style={{ textDecoration: 'none', marginLeft: '20px' }}>Income</Link>
                <Link to='/host/reviews' style={{ textDecoration: 'none', marginLeft: '20px' }}>Reviews</Link>
            </nav>
            <Outlet />
        </>
    )
}