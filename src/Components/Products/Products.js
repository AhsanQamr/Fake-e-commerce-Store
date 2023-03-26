import ProductFilter from "./ProductFilter";

const Products = (props) => {

    const products = props.items;
    return (
        <div>
        <ProductFilter data = {products} />
        {/* <ProductsList items={products} /> */}
        </div>
    );
}

export default Products;