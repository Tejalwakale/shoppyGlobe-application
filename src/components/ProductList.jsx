import React, { useState } from "react";

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
  } = useFetchProducts();

  // Get search query from Redux
  const searchQuery = useSelector(selectSearchQuery);

  const [selectedCategory, setSelectedCategory] = useState("all");

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
      <p classname="error-message">
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

      {/* Category Filter */}
       <div className="category-container">
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
