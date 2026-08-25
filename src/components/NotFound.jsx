// Import Link for navigation between pages
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">

      {/* Display 404 error code */}
      <h1>404</h1>

       {/* Display error message */}
      <h2>Page Not Found</h2>

       {/* Explain that the requested page does not exist */}
      <p>
        Sorry, the page you're looking for doesn't exist.
      </p>

      {/* Button to navigate back to the home page */}
      <Link to="/">
        <button>Go Home</button>
      </Link>
    </main>
  );
}

export default NotFound;