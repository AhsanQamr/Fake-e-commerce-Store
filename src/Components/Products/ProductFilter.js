
import {useState, React,  useEffect} from 'react';
import ProductsList from './ProductsList';

const ProductFilter = (props) => {
    const [filter, setFilter] = useState(props.data);
    const [activeButton, setActiveButton] = useState(null);

    const filterProduct = (category) => {   
        const updateList = props.data.filter((x) => x.category === category);
        setFilter(updateList);
        setActiveButton(category);
    }

    useEffect(() => {
        setFilter(props.data);
        setActiveButton(null);
    }, [props.data]);

    return (
        <>
        <div className="col my-3 " style={{textAlign: 'center'}}>
            <div className="position-sticky" style={{ marginTop: '5rem' }}>
                <h4 className="fw-bold">Product Categories</h4>
                <button className={`btn btn-outline-dark m-1 btn-sm ${!activeButton ? "active" : ""}`} onClick={() => {setFilter(props.data); setActiveButton(null);}}>All</button>
                <button className={`btn btn-outline-dark m-1 btn-sm ${activeButton === "women's clothing" ? "active" : ""}`} onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                <button className={`btn btn-outline-dark m-1 btn-sm ${activeButton === "men's clothing" ? "active" : ""}`} onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                <button className={`btn btn-outline-dark m-1 btn-sm ${activeButton === "jewelery" ? "active" : ""}`} onClick={() => filterProduct("jewelery")}>Jewelery</button>
                <button className={`btn btn-outline-dark m-1 btn-sm ${activeButton === "electronics" ? "active" : ""}`} onClick={() => filterProduct("electronics")}>Electronics</button>
            </div>
            <hr />
        </div>
        <ProductsList items={filter} />
        </>
    );
}

export default ProductFilter;