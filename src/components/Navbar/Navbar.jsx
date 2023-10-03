import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../CartProvider";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const { cartAmountOfItems, cartTotal } = useContext(CartContext);

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.title}>
        Yard Sale
      </Link>
      <Link to="/cart" className={styles.cart}>
        {cartAmountOfItems > 0 && (
          <div className={styles.total}>${cartTotal.toFixed(2)}</div>
        )}
        <i className="fa-solid fa-cart-shopping"></i>
        {cartAmountOfItems > 0 && (
          <div className={styles.counter}>{cartAmountOfItems}</div>
        )}
      </Link>
    </div>
  );
};

export default Navbar;
