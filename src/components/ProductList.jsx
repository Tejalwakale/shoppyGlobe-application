import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";

function ProductList() {
    const { products, loading, error } = useFetchProducts();

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <section>
            <h1>Our Products</h1>

            <div className="product-grid">
                {products.map((product) => (
                    <ProductItem 
                        key={product.id} 
                        product={product} 
                    />
                ))}
            </div>
        </section>
    );
}

export default ProductList;