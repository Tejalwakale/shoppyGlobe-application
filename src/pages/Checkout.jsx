import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      setMessage("Your cart is empty.");
      return;
    }

    setMessage("Order placed successfully!");

    dispatch(clearCart());

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0);

  return (
    <main className="checkout-page">

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

          <label>
            Address
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>

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
              <div className="summary-items">

                {cartItems.map((item) => (
                  <div
                    className="summary-item"
                    key={item.id}
                  >
                   <div>
                      <h3>{item.title}</h3>

                      <p>
                        {item.quantity} × ${item.price}
                      </p>
                    </div>
                  </div>
                ))}

              </div>

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