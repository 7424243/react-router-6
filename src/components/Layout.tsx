import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

export const Layout = () => {
    return (
        <div style={{padding: '2%'}}>
            <Navbar />
            <main style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
                <Outlet />
            </main>
            <footer style={{marginTop: 'auto'}}>&#169; 2022 #VANLIFE</footer>
        </div>
    )
}