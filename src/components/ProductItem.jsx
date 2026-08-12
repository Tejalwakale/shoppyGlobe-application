function ProductItem({ product}) {
    return (
        <div className="product-card">
            <img 
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
            />

            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductItem;