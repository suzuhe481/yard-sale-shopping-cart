import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { CartContext } from "../../../CartProvider";

import styles from "./CartListItem.module.css";

const CartListItem = (props) => {
  const { removeFromCart, editCart } = useContext(CartContext);

  const item = props.item;

  const name = item.name;
  const image = item.image;
  const price = item.price;

  const [quantity, setQuantity] = useState(item.quantity);
  const [isEditing, setIsEditing] = useState(false);

  const itemTotal = (price * quantity).toFixed(2);

  // Returns nothing if quantity is empty;
  if (quantity === 0) {
    return <></>;
  }

  // Handles value changes to the item quantity input element.
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  var buttonsContainerElements;
  if (isEditing) {
    buttonsContainerElements = (
      <form
        onSubmit={() => {
          editCart({ item, setQuantity, setIsEditing });
        }}
      >
        <label htmlFor="quantity-number"></label>
        <input
          className={styles.input}
          type="number"
          id="quantity-number"
          min="1"
          max="10"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <input className={styles.submit} type="submit" />
      </form>
    );
  } else {
    buttonsContainerElements = (
      <>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => removeFromCart(props.item)}>Delete</button>
      </>
    );
  }

  return (
    <div className={styles["cart-list-item"]}>
      <div className={styles["image-container"]}>
        <img className={styles.image} src={image} alt="Game art" />
      </div>
      <div className={styles["name-price-container"]}>
        <div>{name}</div>
        <div>${price}</div>
      </div>
      <div className={styles["quantity-container"]}>
        <div>Quantity: {quantity}</div>
        <div className={styles["buttons-container"]}>
          {buttonsContainerElements}
        </div>
      </div>
      <div className={styles["total-container"]}>
        <div>Total: {itemTotal}</div>
      </div>
    </div>
  );
};

CartListItem.propTypes = {
  item: PropTypes.object,
};

export default CartListItem;
