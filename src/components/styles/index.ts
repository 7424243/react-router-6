export const activeNavBarStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
    marginLeft: '20px'
}

export const navBarStyles = (isActive: boolean) => (
    isActive ? {...activeNavBarStyles} : {textDecoration: 'none', marginLeft: '20px'}
)