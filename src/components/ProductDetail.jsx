import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";


function ProductDetail() {
  // Get the product ID from the dynamic URL
  const { id } = useParams();

  // Redux dispatch is used to add the selected product to the cart
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
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

  if (loading) {
    return (
      <p className="loading">
        Loading products...
      </p>
    );
  }

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

          {/* Left Side */}
          <div className="product-image-section">

            <div className="product-image-box">
              <img
                src={product.thumbnail}
                alt={product.title}
                loading="lazy"
              />
            </div>

            <button
              className="detail-cart-button"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

          </div>

          {/* Right Side */}
          <div className="product-info-box">
            <span className="product-category">
              {product.category}
            </span>

            <h1>{product.title}</h1>

            <p className="detail-price">
              Price: ${product.price}
            </p>

            <p className="detail-rating">
              Rating: {product.rating} 
            </p>

            <p className="detail-description">
              {product.description}
            </p>

          </div>

      </section>

    </main>
  );
}

export default ProductDetail;