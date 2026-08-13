import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img
        src={item.thumbnail}
        alt={item.title}
        loading="lazy"
        className="cart-item-image"
      />

      <div className="cart-item-info">
        <h2>{item.title}</h2>

        <p>Price: ${item.price}</p>

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