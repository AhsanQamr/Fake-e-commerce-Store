import ProductCard from "./ProductCard";


const ProductsList = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                {props.items?.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductsList;