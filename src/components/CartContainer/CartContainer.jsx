import CartListItem from "./CartListItem/CartListItem";

import { useContext } from "react";
import { CartContext } from "../../CartProvider";

import styles from "./CartContainer.module.css";

const CartContainer = () => {
  const { cart, cartTotal } = useContext(CartContext);

  const CartList = cart.map((item) => (
    <CartListItem key={item.id} item={item} />
  ));

  return (
    <div className={styles["cart-container"]}>
      <div>
        <p className={styles["cart-title"]}>
          Your Cart - ${Number(cartTotal).toFixed(2)}
        </p>
      </div>
      <div>{CartList}</div>
    </div>
  );
};

export default CartContainer;
