# ShoppyGlobe E-commerce Application 

ShoppyGlobe is a React-based e-commerce application built using Vite. The application allows users to browse products, search and filter products, 
view product details, manage their shopping cart, and complete a dummy checkout process.

## Features

-Product listing from DummyJSON API
-Product search using Redu state
-Product category filtering
-Product price sorting
-Product detail page
-Add product to cart
-Increase/decrease product quantity
-Remove product from cart
-Cart item count in Header
-Cart total calculation
-Dummy checkout form
-Order placement
-Cart cleared after placing an order
-Automatic redirect to Home after order placement
-404 Page not found
-Responsive design
-Home and Cart navigation icons
-Lazy loading of components
-Lazy loading of product images
Error handling for API requests

## Technologies Used
-React
-Vite
-JavaScript
-Tedux Toolkit
-React Router
-createBrowserRouter
-ReactTypes
-CSS
-DummyJSON API

## API

Products are fetched from the DummyJSON API

https://dummyjson.com/products

Product details are fetched using:

https://dummyjson.com/products/:id


## Project Structure

src
|-components/
|   |-Cart.jsx
|   |-CartItem.jsx
|   |-Header.jsx
|   |-NotFound.jsx
|   |-ProductDetail.js
|   |-ProductItem.jsx
|   |-ProductList.jsx
|
|-hooks/
|    |-useFetchProducts.js
|
|-pages/
|    |-Checkout.jsx
|    |Home.jsx
|
|-redux/
|    |-cartSlice.js
|    |-store.js
|
|-App.jsx
|-main.jsx
|-index.css

## Routing

The application uses React Router with `createBrowserRouter`.

Available routes:

- `/` - Home
- `/product/:id` - Product Details
- `/cart` - Shopping Cart
- `/checkout` - Checkout
- `*` - 404 Page

## Redux State Management 


Redux Toolkit is used to manage the shopping cart.

Cart functionality includes:

 Add product
- Increase quantity
- Decrease quantity
- Remove product
- Clear cart
- Calculate cart total

Redux is also used to manage the product search query.

## Product Search and Filtering

Users can:

- Search products by name
- Filter products by category
- Sort products by price from low to high
- Sort products by price from high to low

## Checkout

The checkout page contains a dummy form for:

- Name
- Email
- Address
- City
- Pincode

After submitting the order:

1. Order confirmation is displayed.
2. Cart is cleared.
3. User is automatically redirected to the Home page.

## Performance Optimization

The application uses:

- React.lazy()
- Suspense
- Code splitting
- Lazy loading for product images

These features help improve application performance.

## Responsive Design

The application is designed to work across different screen sizes including:

- Desktop
- Tablet
- Mobile

CSS media queries are used to provide responsive layouts.

## Installation

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_LINK

Navigate to the project folder:

cd E-commerce-app

Install dependencies:

npm install

Start the development server:

npm run dev

The application will run on the local development server provided by Vite.

## Production Build

To create a production build:

npm run build

## GitHub Repository

GitHub Repository:

YOUR_GITHUB_REPOSITORY_LINK