import PropTypes from "prop-types";

import { useContext } from "react";
import { CartContext } from "../../CartProvider";

import styles from "./AddToCartButton.module.css";

const AddToCartButton = (props) => {
  const { addToCart } = useContext(CartContext);

  // SetItemAdded controls if ItemAddedModal is displayed/hidden.
  const addToCartHandler = (game) => {
    props.setItemAdded(true);
    addToCart(game);
  };

  return (
    <button
      className={styles.button}
      onClick={() => addToCartHandler(props.game, props.setItemAdded)}
    >
      Add To Cart
    </button>
  );
};

AddToCartButton.propTypes = {
  game: PropTypes.object,
  setItemAdded: PropTypes.func,
};

export default AddToCartButton;
