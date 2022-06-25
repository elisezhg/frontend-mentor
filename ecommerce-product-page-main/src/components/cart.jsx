import cart from "../assets/icon-cart.svg";
import "../css/cart.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import iconDelete from "../assets/icon-delete.svg";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../store/actions";

const Cart = () => {
  const [show, setShow] = useState(false);
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleClick = () => {
    setShow(!show);
  };

  const handleDelete = (idx) => {
    dispatch(deleteCartItem(idx));
  };

  const getCartItems = () => {
    return cartItems.map((item, idx) => {
      console.log(item);
      return (
        <div className="cart-item" key={idx}>
          <img className="cart-item-picture" src={item.picture} alt="Product" />
          <p>
            {item.name}
            <br />
            {`$${item.price} x ${item.quantity} `}
            <span className="total-price">${item.price * item.quantity}</span>
          </p>
          <img
            className="delete-icon"
            src={iconDelete}
            alt="delete"
            onClick={() => handleDelete(idx)}
          />
        </div>
      );
    });
  };

  return (
    <div className="cart-container">
      <img className="cart-icon" src={cart} alt="cart" onClick={handleClick} />
      <div className={`cart ${show ? "show" : ""}`}>
        <div className="cart-header">Cart</div>
        <hr />
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty">Your cart is empty</div>
          ) : (
            <>
              <div className="cart-items">{getCartItems()}</div>
              <button className="checkout-btn">Checkout</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
