import PropTypes from "prop-types";

import styles from "./CartListItem.module.css";

const CartListItem = (props) => {
  const item = props.item;

  const name = item.name;
  //   const id = item.id;
  const image = item.image;
  const price = item.price;
  const quantity = item.quantity;

  const total = price * quantity;

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
          <button>Edit</button>
          <button>Delete</button>
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
