import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <p className={styles.title}>Yard Sale</p>
      <p className={styles.cart}>Cart</p>
    </div>
  );
};

export default Navbar;
