import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='container-fluid'>
                
            
            <a href='#' className='navbar-brand'>TecnoCompro</a>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>Componentes</a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>Perifericos</a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>Arma tu pc</a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>Combos</a>
                </li>
            </ul>

            <CartWidget />
            </div>
        </nav>
    )
};

export default NavBar;
