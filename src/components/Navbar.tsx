import { NavLink } from 'react-router-dom'

const activeNavBarStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
    marginLeft: '20px'
}

const navBarStyles = (isActive: boolean) => (
    isActive ? {...activeNavBarStyles} : {textDecoration: 'none', marginLeft: '20px'}
)

export const Navbar = () => {
    return (
        <header>
            <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <NavLink to='/' style={{ textDecoration: 'none' }}>#VANLIFE</NavLink>
                </div>
                <div>
                    <NavLink 
                        to='/host' 
                        style={({isActive}) => (
                           navBarStyles(isActive)
                        )}
                    >
                        Host
                    </NavLink>
                    <NavLink 
                        to='/about' 
                        style={({isActive}) => (
                            navBarStyles(isActive)
                         )}
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to='/vans' 
                        style={({isActive}) => (
                            navBarStyles(isActive)
                         )}
                    >
                        Van
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}