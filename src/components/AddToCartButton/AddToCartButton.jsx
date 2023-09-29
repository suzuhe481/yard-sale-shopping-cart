import PropTypes from "prop-types";

import { useContext } from "react";
import { CartContext } from "../../CartProvider";

import styles from "./AddToCartButton.module.css";

const AddToCartButton = (props) => {
  const { addToCart } = useContext(CartContext);

  return (
    <button className={styles.button} onClick={() => addToCart(props.game)}>
      Add To Cart
    </button>
  );
};

AddToCartButton.propTypes = {
  game: PropTypes.object,
};

export default AddToCartButton;
