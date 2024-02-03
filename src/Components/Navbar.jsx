import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='nav-bar-container'>
            <nav className='nav-bar'>
                <ul className='nav-bar-menu'>
                    <li>
                    <Link to="/#symbols1">Symbols1</Link>
                    </li>
                    <li>
                    <Link to="/#symbols2">Symbols2</Link>
                    </li>
                    <li>
                    <Link to="/#symbols3">Symbols3</Link>
                    </li>
                    <li>
                    <Link to="/#symbols4">Symbols4</Link>
                    </li>
                    <li>
                    <Link to="/#symbols5">Symbols5</Link>
                    </li>
                    <li>
                    <Link to="/#symbols6">Symbols6</Link>
                    </li>
                                    
                </ul>
            </nav>
        </div>
    )
}