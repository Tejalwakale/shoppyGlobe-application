// Import React hooks for managing state and side effects
import { useEffect, useState } from "react";

function useFetchProducts(url) {

  // Store the fetched products
  const [products, setProducts] = useState([]);

   // Store the loading status
  const [loading, setLoading] = useState(true);

  // Store any error message
  const [error, setError] = useState("");

    // Fetch products when the URL changes
  useEffect(() => {

    // Function to fetch products from the API
    const fetchProducts = async () => {
      try {
         // Send a request to the provided API URL
        const response = await fetch(url);

        // Check if the API request was successful
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        // Convert the API response into JSON
        const data = await response.json();

        // Store the products in state
        setProducts(data.products);
      } catch (error) {
         // Store the error message
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [url]);

  return {
    products,
    loading,
    error,
  };
}

export default useFetchProducts;