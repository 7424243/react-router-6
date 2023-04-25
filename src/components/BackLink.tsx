import { Link } from 'react-router-dom'

export const BackLink = ({to}: any) => {
    return (
        <Link to={to} relative='path' style={{backgroundColor: 'white', fontSize: 30, marginTop: 20, textDecoration: 'none'}}>
            🔙
        </Link>
    )
}