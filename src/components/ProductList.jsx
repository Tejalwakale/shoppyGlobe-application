import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";
import { setSearchQuery, selectSearchQuery } from "../redux/cartSlice";


function ProductList() {
  const dispatch = useDispatch();

  // Fetch products using the custom hook
  const {
    products,
    loading,
    error,
  } = useFetchProducts("https://dummyjson.com/products");

  // Get search query from Redux
  const searchQuery = useSelector(selectSearchQuery);

  // category state
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sort state
  const [sortOrder, setSortOrder] = useState("default");

  // Get unique categories
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = 
      selectedCategory === "all" ||
      product.category === selectedCategory;

      return matchesSearch && matchesCategory;

  } );

  // Sort product by price
  const sortedProducts = [...filteredProducts];

  if (sortOrder === "low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }
    

  // Loading state
  if (loading) {
    return (
      <p className="loading">
        Loading product...
      </p>
    );
  }

  // Error state
  if (error) {
    return (
      <p className="error-message">
        Unable to load products. Please try again.
      </p>
    );
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

      {/* Filters */}
      <div className="filter-container">

        {/* Category */}
          <div className="filter-group">
            <label htmlFor="category">
              Category:
            </label>

            <select
              id="category"
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(e.target.value)
              }
            >
              {categories.map((category) => (
                <option
                    key={category}
                    value={category}
                >
                  {category === "all"
                    ? "All Categories"
                    : category}
                </option>
              ))}
            </select>
          </div>

         {/* Sort */}
         <div className="filter-group">
            <label htmlFor="sort">
              Sort by:
            </label>

            <select
              id="sort"
              value={sortOrder}
              onChange={(e) =>
                setSortOrder(e.target.value)
              }
            >
              <option value="default">
                Default
              </option>

              <option value="low-high">
               Price: Low to High
              </option>

              <option value="high-low">
                Price: High to Low
              </option>
            </select>
          </div>
      </div>
      {/* Products */}
      {sortedProducts.length > 0 ? (
        <div className="product-grid">
          {sortedProducts.map((product) => (
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
