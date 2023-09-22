import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.title}>
        Yard Sale
      </Link>
      <Link to="/cart" className={styles.cart}>
        <i className="fa-solid fa-cart-shopping"></i>
        <div className={styles.counter}>123</div>
      </Link>
    </div>
  );
};

export default Navbar;
