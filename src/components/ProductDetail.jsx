// Import React hooks for state and side effects
import { useEffect, useState } from "react";

// Import Redux dispatch to send actions
import { useDispatch } from "react-redux";

// Import Link for navigation and useParams to get URL parameters
import { Link, useParams } from "react-router-dom";

// Import addToCart action from Redux cart slice
import { addToCart } from "../redux/cartSlice";


function ProductDetail() {
  // Get the product ID from the dynamic URL
  const { id } = useParams();

  // Redux dispatch is used to add the selected product to the cart
  const dispatch = useDispatch();

    // Store product details
  const [product, setProduct] = useState(null);

   // Store loading status
  const [loading, setLoading] = useState(true);

  // Store error message
  const [error, setError] = useState("");

  // Add the current product to the Redux cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  // Fetch product details whenever the product ID changes
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        
          // Request product details using the dynamic product ID
        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        // Handle unsuccessful API responses
        if (!response.ok) {
          throw new Error("Product not found");
        }

        // Convert the API response into JSON
        const data = await response.json();

        // Store the fetched product in component state
        setProduct(data);
      } catch (error) {
        // Store the error message for displaying to the user
        setError(error.message);
      } finally {
        // Stop displaying the loading state
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Show loading message while product is being fetched
  if (loading) {
    return (
      <p className="loading">
        Loading products...
      </p>
    );
  }

   // Show error message if product cannot be loaded
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main className="product-detail-page">

      {/* Back to Home */}
      <Link to="/" className="back-home"
      >
        Back to Home
      </Link>

      {/* Main Product Container */}
      <section className="product-detail-container">

          {/* Left Side Product image and cart button*/}
          <div className="product-image-section">

            <div className="product-image-box">
              <img
                src={product.thumbnail}
                alt={product.title}
                loading="lazy"
              />
            </div>

            {/* Button to add product to cart */}
            <button
              className="detail-cart-button"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

          </div>

          {/* Right Side - Product information */}
          <div className="product-info-box">

            {/* Display product category */}
            <span className="product-category">
              {product.category}
            </span>

            {/* Product Name */}
            <h1>{product.title}</h1>

            {/* Product price */}
            <p className="detail-price">
              Price: ${product.price}
            </p>

            {/* Product rating */}
            <p className="detail-rating">
              Rating: {product.rating} 
            </p>

            {/* Product description */}
            <p className="detail-description">
              {product.description}
            </p>

          </div>

      </section>

    </main>
  );
}

export default ProductDetail;