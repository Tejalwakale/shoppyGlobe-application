// Import useSelector to get data from Redux store
import { useSelector } from "react-redux";

// Import Link for navigation between pages
import { Link } from "react-router-dom";

// Import CartItem component to display each cart product
import CartItem from "./CartItem";

function Cart() {
   // Get cart items from the Redux store
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // If the cart is empty, show an empty cart message
  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <h1>Your Cart</h1>

        <p>Your cart is empty.</p>

        // If the cart is empty, show an empty cart message
        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      {/* Display all products in the cart */}
      <div className="cart-list">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>

        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      </div>
    </main>
  );
}

export default Cart;