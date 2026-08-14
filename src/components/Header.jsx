import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHome, FaShoppingCart } from "react-icons/fa"

function Header() {
  const cartItems = useSelector(
    (state) => state.cart?.items || []
  );

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
      
        <Link to="/" className="home-link">
        <FaHome />
        </Link>

        <Link to="/cart" className="cart-link">
          <FaShoppingCart />
          ({totalItems})
        </Link>
      </nav>
    </header>
  );
}

export default Header;