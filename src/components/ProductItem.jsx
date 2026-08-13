import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">

      {/* Product Image */}
      <Link to={`/product/${product.id}`}
            className="product-link"
      >
        <div className="product-image-container">
          <img 
            src={product.thumbnail} 
            alt={product.title}
            loading="lazy"
            className="product-image"
          />
        </div>

        {/* Product Name */}
        <h2 className="product-title">
          {product.title}
        </h2>
      </Link>

      {/* Product Price */}
      <p className="product-price">
        ${product.price}
      </p>

      {/* Add to Cart */}
      <button className="add-cart-button"
              onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      
    </div>
  );
}

export default ProductItem;