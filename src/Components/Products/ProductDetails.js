import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        let componentMounted = true;
        const getProductData = async () => {
            const response = await fetch(
                `https://fakestoreapi.com/products/${id}`
            );
            if (componentMounted) {
                const data = await response.json();
                console.log(data);
                setProduct(data);
            }
        };
        getProductData();
        return () => {
            componentMounted = false;
        };
    }, [id]);

    return (
        <div className="container" style={{marginTop: '5rem'}}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src={product.image} alt={product.title} className="img-fluid" style={{height: '20rem'}}  />
                </div>
                <div className="col-12 col-md-6">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p className="text-muted">Category: {product.category}</p>
                    <h2 className="border border-5 border-dark rounded" >${product.price}</h2>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="badge badge-pill badge-success text-bg-warning">In Stock</span>
                    </div>
                    <div className="btn-group btn-lg" style={{margin: ' 2rem 0 5.2rem 0'}}>
                        <button type="button" className="btn btn-dark border border-5 border-dark rounded"> Add to Cart</button>
                    </div>
                </div> 
            </div>
        </div>
    );
        
};

export default ProductDetails;