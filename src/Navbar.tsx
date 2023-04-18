import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <header>
            <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <Link to='/' style={{ textDecoration: 'none' }}>#VANLIFE</Link>
                </div>
                <div>
                    <Link to='/about' style={{ textDecoration: 'none', marginLeft: '20px' }}>About</Link>
                    <Link to='/vans' style={{ textDecoration: 'none', marginLeft: '20px' }}>Van</Link>
                </div>
            </nav>
        </header>
    )
}