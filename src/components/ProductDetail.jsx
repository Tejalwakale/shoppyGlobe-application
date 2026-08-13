import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";


function ProductDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
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