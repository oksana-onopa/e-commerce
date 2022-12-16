import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeItemFromCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext);
  const removeProductFromCart = () => removeItemFromCart(cartItem);
  const addProductToCart = () => addItemToCart(cartItem);
  const clearCartItem = () => clearItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={removeProductFromCart} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={addProductToCart} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={clearCartItem} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
