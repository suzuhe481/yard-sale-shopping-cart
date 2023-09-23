import Navbar from "../Navbar/Navbar";
import CartContainer from "../CartContainer/CartContainer";

import styles from "./Cart.module.css";

function Cart() {
  return (
    <div className={styles.cart}>
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default Cart;
