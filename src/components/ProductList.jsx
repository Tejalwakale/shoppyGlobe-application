import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";
import { setSearchQuery, selectSearchQuery } from "../redux/cartSlice";


function ProductList() {
  const dispatch = useDispatch();

  // Fetch all products using the reusable custom hook
  const {
    products,
    loading,
    error,
  } = useFetchProducts("https://dummyjson.com/products");

  // Get search query from Redux
  const searchQuery = useSelector(selectSearchQuery);

  // Store the selected category and sorting option
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  // Create the list of unique product categories
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());

    //  Check whether the product belongd to the selected category
    const matchesCategory = 
      selectedCategory === "all" ||
      product.category === selectedCategory;

      return matchesSearch && matchesCategory;

  } );

  // Sort product by price
  const sortedProducts = [...filteredProducts];

  // Sort products from lowest price to highest price
  if (sortOrder === "low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  // Sort the products from highest price to lowest price
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

      {/* Page heading */}
      <h1>Our Products</h1>

      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) =>
            // Store the search value in Redux
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
                // Update the selected category
                setSelectedCategory(e.target.value)
              }
            >
              {/* Display the all available product categories */}
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

         {/* Price sorting options */}
         <div className="filter-group">
            <label htmlFor="sort">
              Sort by:
            </label>

            <select
              id="sort"
              value={sortOrder}
              onChange={(e) =>
                // Update the selected sorting option
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
        // Display the message when no product matches the filters
        <p className="no-products">
          No products found.
        </p>
      )}
    </section>
  );
}

export default ProductList;
