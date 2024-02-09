
import { Link, animateScroll as scroll } from "react-scroll";

export const Navbar = () => {
    
    return (
        <div id="nav-bar-main" className='nav-bar-container'>
            <div className="title-container">
                <h1>Symbo</h1><h1>Lite</h1>         
            </div>
            <div className='nav-bar-menu-container'>
                <nav className='nav-bar'> 
                    <ul className='nav-bar-menu'>
                        <li>
                        <Link 
                            activeClass="active"
                            to="arrows-container"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={2000}
                        >
                            Símbolos De Flechas
                        </Link>
                        </li>
                        <li>
                        <Link 
                            activeClass="active"
                            to="circles-container" 
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={2000}
                        >
                            Símbolos De Círculos
                        </Link>
                        </li>
                        <li>
                        <Link 
                            activeClass="active"
                            to=""
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={2000}
                        >
                            Símbolos De 
                        </Link>
                        </li>
                        <li>
                        <Link to="/#symbols4">Símbolo De Flecha</Link>
                        </li>              
                    </ul>
                </nav>
                <nav className='nav-bar'>
                    <ul className='nav-bar-menu'>
                        <li>
                        <Link to="/#symbols1">Símbolo De Flecha</Link>
                        </li>
                        <li>
                        <Link to="/#symbols2">Símbolo De Flecha</Link>
                        </li>
                        <li>
                        <Link to="/#symbols3">Símbolo De Flecha</Link>
                        </li>
                        <li>
                        <Link to="/#symbols4">Símbolo De Flecha</Link>
                        </li>              
                    </ul>
                </nav>
                <nav className='nav-bar'>
                    <ul className='nav-bar-menu'>
                        <li>
                        <Link to="/#symbols1">Símbolo De Flecha</Link>
                        </li>
                        <li>
                        <Link to="/#symbols2">Símbolo De Flecha</Link>
                        </li>
                        <li>
                        <Link to="/#symbols3">Símbolo De Flecha</Link>
                        </li>
                        <li>
                        <Link to="/#symbols4">Símbolo De Flecha</Link>
                        </li>              
                    </ul>
                </nav>
                <nav className='nav-bar'>
                    <ul className='nav-bar-menu'>
                        <li>
                        <Link to="/#symbols1">Símbolo De Flecha</Link>
                        </li>
                        <li>
                        <Link to="/#symbols2">Símbolo De Flecha</Link>
                        </li>
                        <li>
                        <Link to="/#symbols3">Símbolo De Flecha</Link>
                        </li>
                        <li>
                        <Link to="/#symbols4">Símbolo De Flecha</Link>
                        </li>              
                    </ul>
                </nav>
                <nav className='nav-bar'>
                    <ul className='nav-bar-menu'>
                        <li>
                        <Link to="/#symbols1">Símbolo De Flecha</Link>
                        </li>
                        <li>
                        <Link to="/#symbols2">Símbolo De Flecha</Link>
                        </li>
                        <li>
                        <Link to="/#symbols3">Símbolo De Flecha</Link>
                        </li>
                        <li>
                        <Link to="/#symbols4">Símbolo De Flecha</Link>
                        </li>              
                    </ul>
                </nav>
            </div>
        </div>
    )
}