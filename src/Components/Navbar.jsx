
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
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Símbolos De Flechas</Link>
                        </li>
                        <li>
                        <Link 
                            activeClass="active"
                            to="button-circle-container" 
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={3000}
                            >Símbolos De Circulos</Link>
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