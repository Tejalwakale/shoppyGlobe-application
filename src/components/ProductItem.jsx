import { Link } from "react-router-dom";

function ProductItem({ product}) {
    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
            
                <img 
                    src={product.thumbnail}
                    alt={product.title}
                    className="product-image"
                />

                <h2>{product.title}</h2>
            </Link>

            <p>${product.price}</p>
            
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductItem;