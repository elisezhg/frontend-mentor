import Carousel from "./carousel";
import cart from "../assets/icon-cart.svg";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";
import "../css/product.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../store/actions";
import img1_thumbnail from "../assets/image-product-1-thumbnail.jpg";

const Product = () => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);

  const handleMinus = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(
        addCartItem({
          name: "Fall Limited Edition Sneakers",
          picture: img1_thumbnail,
          price: "125.00",
          quantity: quantity,
        })
      );
    }
  };

  return (
    <div className="product">
      <Carousel />

      <div className="product-info">
        <p className="brand">Sneaker Company</p>
        <p className="name">Fall Limited Edition Sneakers</p>
        <p className="description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div className="price-info">
          <p className="new-price">
            $125.00 <span className="promo">50%</span>
          </p>
          <p className="old-price">$250.00</p>
        </div>

        <div className="product-actions">
          <button className="quantity-selection">
            <img src={minus} alt="minus" onClick={handleMinus} />
            <span className="quantity">{quantity}</span>
            <img src={plus} alt="plus" onClick={handlePlus} />
          </button>
          <button className="add-to-cart" onClick={handleAddToCart}>
            <img className="cart" src={cart} alt="cart" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
