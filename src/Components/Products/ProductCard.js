import {React} from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../../assets/arrow.svg';
const ProductCard = (props) => {

    return (
        <div className='card' style={{width: '14rem', backgroundColor: '#eee', margin: '1rem 0.75rem'}}>
            <img src={props.image} className='card-img-top rounded d-block bg-secondary' alt='robot' style={{height: '6rem', width:'auto'}} />
            <div className='card-body'>
                {/* add product title and amount in card */}
                <p className='card-text' style={{fontWeight: 'bold', fontSize: '1.25rem'}} >${props.price}</p>
                <h5 className='card-title'style={{textAlign:'center', fontSize:'0.75rem'}}>{props.title}</h5>
            </div>
            <div className='card-footer'>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className="badge badge-pill badge-success text-bg-warning">In Stock</span>
                    <div className='btn-group'>
                        <NavLink to={`/products/${props.id}`} className='stretched-link'>
                            <button type='button' className='btn btn-transparent'>
                                <img src={arrow} alt='arrow'   />
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default ProductCard;