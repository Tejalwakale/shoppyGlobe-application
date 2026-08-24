// Import React StrictMode and lazy loading support
import { StrictMode, lazy } from 'react';

// Import React DOM to render the application
import { createRoot } from 'react-dom/client';

// Import React Router for application routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Provide the Redux store to all components in the application
import { Provider } from "react-redux";

import './index.css';
import store from "./redux/store.js"

// Lazy-load pages and components to improve application performance
const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./components/NotFound"));
const App = lazy(() => import("./App.jsx"));

// Configure application routes using createBrowserRouter
const router = createBrowserRouter([
  {
    // App acts as the main layout for all application routes
    path: "*",
    element: <App />,

     // Define child routes displayed inside the App layout
    children: [
      {
         // Home page is displayed for the root URL
        index: true,
        element: <Home />,
    },
    {
       // Dynamic route for displaying individual product details
      path: "product/:id",
      element: <ProductDetail />,
    },
    {
      // Shopping cart page
      path: "cart",
      element: <Cart />,
    },
    {
       // Checkout page
      path: "checkout",
      element: <Checkout />,
    },
    {
      // Display the 404 page for unknown routes
      path: "*",
      element: <NotFound />,
    },
  ],
  },
]);

// Render the React application into the root HTML element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provide Redux state to the entire application */}
    <Provider store={store}>
      {/* Provide the configured router to the application */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
