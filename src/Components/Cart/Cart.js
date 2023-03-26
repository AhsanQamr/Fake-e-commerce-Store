import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const shipping = 5.99;
    const image = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";

    useEffect(() => {
        let componentMounted = true;
        const getCartData = async () => {
            setLoading(true);
            const response = await fetch(
                "https://fakestoreapi.com/carts/1"
            );
            if (componentMounted) {
                const data = await response.json();
                setCart(data.products);
                setTotal(data.total);
                setLoading(false);
            }
        };
        getCartData();
        return () => {
            componentMounted = false;
        };
    }, []);

    return (
        <div className="container" style={{ marginTop: "5rem" }}>
            <div className="row">
                <div className="col-12">
                    <h1>Cart</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((product) => (
                                    <tr key={product.id}>
                                        <td>
                                            <img src={product.image} alt={product.title} className="img-fluid" style={{ height: "2.5rem" }} />
                                        </td>
                                        <td>{product.title}</td>
                                        <td>${product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>${product.price * product.quantity}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => {
                                                    console.log("remove");
                                                }}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className = 'container' style={{marginTop: '1rem'}}>
                <div className = 'row'>
                    <div className = 'col-12'>
                        <div className = 'd-flex justify-content-center'>
                            <div className = 'card shadow p-3 mb-5 bg-white rounded' style = {{width: '28rem'}}>
                                <div className = 'card-body'>
                                    <h4 className = 'card-title'>Order Summary</h4>
                                    <p className = 'card-text'>Subtotal: ${total}</p>
                                    <hr/>
                                    <p className = 'card-text'>Shipping: ${shipping}</p>
                                    <hr />
                                    <p className = 'card-text'>Total: ${total + shipping}</p>
                                    <hr />
                                    <div className = 'd-flex justify-content-between'>
                                        <NavLink to = '/'>
                                        <button className = 'btn btn-outline-secondary'>Continue Shopping</button>,
                                        </NavLink>
                                        <button className = 'btn btn-dark ' style={{cursor:'not-allowed', opacity:'0.5'}}>Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                                                
        </div>
    );
}

export default Cart;