import { NavLink, Outlet } from 'react-router-dom'
import { navBarStyles } from './styles'

export const HostLayout = () => {
    return (
        <>
            <nav style={{display: 'flex'}}>
                <NavLink 
                    to='.'   
                    end //acitve link and nested routing                      
                    style={({isActive}) => (
                        navBarStyles(isActive)
                    )}
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    to='income'                         
                    style={({isActive}) => (
                            navBarStyles(isActive)
                    )}
                >
                    Income
                </NavLink>
                <NavLink 
                    to='vans'                         
                    style={({isActive}) => (
                        navBarStyles(isActive)
                    )}
                >
                    Vans
                </NavLink>
                <NavLink 
                    to='reviews'                         
                    style={({isActive}) => (
                        navBarStyles(isActive)
                    )}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}