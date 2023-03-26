import cart from '../../assets/cart.svg';
import search from '../../assets/search.svg';
import home from '../../assets/home.svg';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <span class="navbar-brand mb-0 h1">PriceLo</span>
                    <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page" href="/">
                                    <img src={home} alt="home" />
                                </NavLink>
                                {/* <button className="btn btn-transparent" aria-current="page" href="/">
                                    <img src={home} alt="home" />
                                </button> */}
                            </li>
                            <button type='submit' className='btn btn-transparent'  >
                                <img src={cart} alt="cart" />
                                <span className='badge bg-warning'>
                                    0
                                </span>
                            </button>
                        </ul>
                    </div>
                    <form className="d-flex">
                        <input className="form-control me-1" type="search" placeholder="Search Products..." aria-label="Search" style={{height: '2.5rem', marginTop: '0.2rem'}} />
                        <button className="btn btn-link" type="submit">
                            <img src={search} alt="search" style={{margin: '0.5rem 1rem 0.5rem 0.1rem' }} />
                        </button>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default NavBar