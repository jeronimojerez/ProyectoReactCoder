import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='container-fluid'>
                <h1>
                    <Link to="/" className='navbar-brand' >TecnoCompra</Link>
                </h1>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <NavLink to="/category/components" className='nav-link' >Componentes</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/category/peripherals" className='nav-link' >Perifericos</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/category/combos" className='nav-link' >Combos</NavLink>
                </li>
            </ul>

            <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;