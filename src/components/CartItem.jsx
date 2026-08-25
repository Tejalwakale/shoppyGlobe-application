// Import useDispatch to send actions to the Redux store
import { useDispatch } from "react-redux";

// Import cart actions from cartSlice
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";

function CartItem({ item }) {
  // Create dispatch function to send actions to Redux
  const dispatch = useDispatch();

  return (
    <div className="cart-item">

      {/* Display product image */}
      <img
        src={item.thumbnail}
        alt={item.title}
        loading="lazy"
        className="cart-item-image"
      />

      <div className="cart-item-info">

        {/* Display product name */}
        <h2>{item.title}</h2>


        {/* Display product price */}
        <p>Price: ${item.price}</p>

         {/* Buttons to increase or decrease quantity */}
        <div className="quantity-controls">
          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
          >
            +
          </button>
        </div>

        {/* Remove product from the cart */}
        <button
          className="remove-button"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;