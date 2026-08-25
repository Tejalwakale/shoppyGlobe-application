// Import Link for navigation to the product detail page
import { Link } from "react-router-dom";

// Import useDispatch to send actions to Redux
import { useDispatch } from "react-redux";

// Import addToCart action from the cart slice
import { addToCart } from "../redux/cartSlice";

function ProductItem({ product }) {

  // Create dispatch function for Redux actions
  const dispatch = useDispatch();

  // Add the selected product to the cart
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