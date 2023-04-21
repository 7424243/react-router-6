import { NavLink } from 'react-router-dom'
import { navBarStyles } from './styles'

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
                        Vans
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}