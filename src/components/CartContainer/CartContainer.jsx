import CartListItem from "./CartListItem/CartListItem";

import styles from "./CartContainer.module.css";

const CartContainer = () => {
  // Get cart from localStorage
  const cartData = JSON.parse(localStorage.getItem("cart"));

  const CartList = cartData.map((item) => (
    <CartListItem key={item.id} item={item} />
  ));

  return (
    <div className={styles["cart-container"]}>
      <div>
        <p className={styles["cart-title"]}>Your Cart</p>
      </div>
      <div>{CartList}</div>
    </div>
  );
};

export default CartContainer;
