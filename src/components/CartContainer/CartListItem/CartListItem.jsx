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
      <span>{name}</span>
      <span>${price}</span>
      <span>Quantity: {quantity}</span>
      <span>Total: {total}</span>
    </div>
  );
};

CartListItem.propTypes = {
  item: PropTypes.object,
};

export default CartListItem;
