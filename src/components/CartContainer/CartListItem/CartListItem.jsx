import PropTypes from "prop-types";
import { useState } from "react";

import styles from "./CartListItem.module.css";

// Completely removes an item from cart.
const removeItemFromCart = (props) => {
  const id = props.id;
  // Get cart from localStorage
  var cart = JSON.parse(localStorage.getItem("cart"));

  for (var i = 0; i < cart.length; i++) {
    var gameInCart = cart[i];

    // Removes game in cart when id matches
    if (gameInCart.id === id) {
      cart.splice(i, 1);
      break;
    }
  }

  props.setQuantity(0);

  // Update localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Edits the quantity of a cart item.
const editCartItem = (props) => {
  event.preventDefault();

  const newItemQuantity = event.target[0].value;

  if (newItemQuantity < 1 || newItemQuantity > 12) {
    return;
  }

  props.setIsEditing(false);
  props.setQuantity(newItemQuantity);
};

const CartListItem = (props) => {
  const item = props.item;

  const name = item.name;
  const id = item.id;
  const image = item.image;
  const price = item.price;

  const [quantity, setQuantity] = useState(item.quantity);
  const [isEditing, setIsEditing] = useState(false);

  const total = price * quantity;

  var buttonsContainerElements;
  if (isEditing) {
    buttonsContainerElements = (
      <form
        onSubmit={() => {
          editCartItem({ setQuantity, setIsEditing });
        }}
      >
        <label htmlFor="quantity-number"></label>
        <input type="number" id="quantity-number" min="1" max="10" />
        <input type="submit" />
      </form>
    );
  } else {
    buttonsContainerElements = (
      <>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => removeItemFromCart({ id, setQuantity })}>
          Delete
        </button>
      </>
    );
  }

  // Returns nothing if quantity is empty;
  if (quantity === 0) {
    return <></>;
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
        <div>Total: {total}</div>
      </div>
    </div>
  );
};

CartListItem.propTypes = {
  item: PropTypes.object,
};

export default CartListItem;
