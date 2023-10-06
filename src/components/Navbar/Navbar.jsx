import { Link } from "react-router-dom";
import ScrollToTopButton from "../UI/ScrollToTopButton/ScrollToTopButton";
import { useContext } from "react";
import { CartContext } from "../../CartProvider";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const {
    cartAmountOfItems,
    cartTotal,
    animateCartItemAdded,
    animateCartItemsRemoved,
  } = useContext(CartContext);

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.title}>
        Yard Sale
      </Link>
      <Link to="/cart" className={styles.cart}>
        {cartAmountOfItems > 0 && (
          <div className={styles.total}>${Number(cartTotal).toFixed(2)}</div>
        )}
        <i
          className={`${styles["cart-icon"]} fa-solid fa-cart-shopping ${
            animateCartItemAdded && "fa-bounce"
          } ${animateCartItemsRemoved && "fa-shake"}`}
        ></i>

        {cartAmountOfItems > 0 && (
          <div className={styles.counter}>{cartAmountOfItems}</div>
        )}
      </Link>
      <ScrollToTopButton />
    </div>
  );
};

export default Navbar;
