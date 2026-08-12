import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
      <div className="logo">
            <span>ShoppyGlobe</span>
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>

        <Link to="/cart">
            Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
}

export default Header;