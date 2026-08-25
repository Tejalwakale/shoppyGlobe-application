// Import Link for navigation between pages
import { Link } from "react-router-dom";

// Import useSelector to get cart data from Redux
import { useSelector } from "react-redux";

// Import Home and Shopping Cart icons
import { FaHome, FaShoppingCart } from "react-icons/fa"

function Header() {
  // Get cart items from Redux store
  const cartItems = useSelector(
    (state) => state.cart?.items || []
  );

   // Calculate the total number of products in the cart
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">

      {/* Logo */}
      <Link to="/" className="logo">
        <span>ShoppyGlobe</span>
      </Link>

      {/* Navigation Bar */}
      <nav className="nav">
      
         {/* Home icon - navigates to the home page */}
        <Link to="/" className="home-link">
        <FaHome />
        </Link>

        {/* Cart icon - navigates to the cart page */}
        <Link to="/cart" className="cart-link">
          <FaShoppingCart />
          ({totalItems})
        </Link>
      </nav>
    </header>
  );
}

export default Header;