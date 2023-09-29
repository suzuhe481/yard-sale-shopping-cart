import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../CartProvider";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const { cartAmountOfItems } = useContext(CartContext);

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.title}>
        Yard Sale
      </Link>
      <Link to="/cart" className={styles.cart}>
        <i className="fa-solid fa-cart-shopping"></i>
        {cartAmountOfItems > 0 && (
          <div className={styles.counter}>{cartAmountOfItems}</div>
        )}
      </Link>
    </div>
  );
};

export default Navbar;
