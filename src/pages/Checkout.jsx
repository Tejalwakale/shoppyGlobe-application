// Import useState to manage form and message state
import { useState } from "react";

// Import Redux hooks to access and update the cart
import { useDispatch, useSelector } from "react-redux";

// Import useNavigate for page navigation
import { useNavigate } from "react-router-dom";

// Import clearCart action from Redux cart slice
import { clearCart } from "../redux/cartSlice";

function Checkout() {
  // Create dispatch function to send Redux actions
  const dispatch = useDispatch();

  // Create navigate function to change pages
  const navigate = useNavigate();

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

   // Store customer form information
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

   // Store order success or error message
  const [message, setMessage] = useState("");

   // Handle changes in form input fields
  const handleChange = (e) => {
    // Get the input field name and value
    const { name, value } = e.target;

     // Update only the changed field
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle checkout form submission
  const handleSubmit = (e) => {
     // Prevent the page from refreshing
    e.preventDefault();

    // Check whether the cart is empty
    if (cartItems.length === 0) {
      setMessage("Your cart is empty.");
      return;
    }

    // Display successful order message
    setMessage("Order placed successfully!");

    // Clear all items from the cart
    dispatch(clearCart());

    // Navigate to the Home page after 1.5 seconds
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  // Calculate the total price of all cart items
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0);

  return (
    <main className="checkout-page">

       {/* Checkout page heading */}
      <h1>Checkout</h1>

      {message && (
        <p className="order-message">
          {message}
        </p>
      )}

      <div className="checkout-container">

        {/* Customer Information */}
        <section className="checkout-form-section">
          <h2>Customer Information</h2>
        
         {/* Checkout form */}
        <form onSubmit={handleSubmit} className="checkout-form">
          <label>
            Full Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          {/* Email field */}
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

             {/* Address field */}
          <label>
            Address
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>

          {/* City field */}
          <label>
            City
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>

           {/* Pincode field */}
          <label>
            Pincode
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </label>

          {/* Button to place the order */}
          <button type="submit" className="place-order-button">
            Place Order
          </button>
        </form>
        </section>

        {/* Order Summary */}
        <section className="order-summary">

          <h2>Order Summary</h2>

          {cartItems.length === 0 ? (
            <p>Your Order is Place.</p>
          ) : (
            <>
              {/* Display all items in the order */}
              <div className="summary-items">

                {cartItems.map((item) => (
                  <div
                    className="summary-item"
                    key={item.id}
                  >
                    {/* Display product name and quantity */}
                   <div>
                      <h3>{item.title}</h3>

                      <p>
                        {item.quantity} × ${item.price}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
              
               {/* Display the total order price */}
              <div className="summary-total">
                <span>Total</span>

                <strong>
                  ${totalPrice.toFixed(2)}
                </strong>
              </div>
            </>
          )}

        </section>

      </div>

    </main>
  );
}
        
export default Checkout;