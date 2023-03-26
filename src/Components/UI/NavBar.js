import cart from '../../assets/cart.svg';
import search from '../../assets/search.svg';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container-fluid d-flex flex-row ">
                    <NavLink to="/" className="nav-link" aria-current="page" href="/">
                    <span class="navbar-brand mb-0 h1">PriceLo</span>
                    </NavLink>
                    <form className="d-flex align-items-center">
                        <NavLink to="/cart" className="nav-link" aria-current="page" href="/">
                            <div className="d-flex align-items-center" style={{marginRight: '0.7rem'}}>
                                <img src={cart} alt="cart"  />
                                <span className='badge bg-warning'>
                                    0
                                </span>
                            </div>
                        </NavLink>
                        <div className = 'input-group'>
                            <input className="form-control me-2" type="search" placeholder="Search Products..." aria-label="Search" style={{height: '2.5rem', marginTop: '0.2rem'}} />
                            <button className="btn btn-outline-transparent" type="submit" style={{height: '2.5rem', marginTop: '0.2rem'}}>
                                <img src={search} alt="search"  style={{height: '1.5rem'}} />
                            </button>
                        </div>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default NavBar