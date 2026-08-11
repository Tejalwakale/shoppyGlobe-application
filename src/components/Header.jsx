import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <span>ShoppyGlobe</span>
            </div>

            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </header>
    );
}

export default Header;