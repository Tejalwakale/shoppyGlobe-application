import { useEffect, useState } from "react";

function useFetchProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await response.json()

                setProducts(data.products);
            }   catch (error) {
                setError(error.message);
            }   finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return {
    products,
    loading,
    error
    };
}

export default useFetchProducts;
