import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
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
    return <p>Loading product...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main className="product-detail">
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
      />

      <div>
        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <h2>${product.price}</h2>

        <p>Rating: {product.rating}</p>

        <p>Category: {product.category}</p>

        <button onClick={handleAddToCart}>
            Add to Cart
        </button>
      </div>
    </main>
  );
}

export default ProductDetail;