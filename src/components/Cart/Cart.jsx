import Navbar from "../Navbar/Navbar";

import styles from "./Cart.module.css";

function Cart() {
  return (
    <div className={styles.cart}>
      <Navbar />
      <div>The shopping cart</div>
    </div>
  );
}

export default Cart;
