import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";
import {
  setSearchQuery,
  selectSearchQuery,
} from "../redux/cartSlice";

function ProductList() {
  const dispatch = useDispatch();

  // Fetch products using the custom hook
  const {
    products,
    loading,
    error,
  } = useFetchProducts();

  // Get search query from Redux
  const searchQuery = useSelector(selectSearchQuery);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  // Loading state
  if (loading) {
    return <p>Loading products...</p>;
  }

  // Error state
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="product-list">
      <h1>Our Products</h1>

      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) =>
            dispatch(setSearchQuery(e.target.value))
          }
        />
      </div>

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <p className="no-products">
          No products found.
        </p>
      )}
    </section>
  );
}

export default ProductList;
