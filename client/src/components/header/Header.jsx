
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <ul>
                <li>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        Home
                    </Link>
                </li>
                <li>

                    <Link to='/products' style={{ textDecoration: 'none' }}>
                        Products
                    </Link>
                </li>
            </ul>
        </>

    )
}

export default Header