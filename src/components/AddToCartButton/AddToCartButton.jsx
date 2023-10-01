import PropTypes from "prop-types";

import { useContext } from "react";
import { CartContext } from "../../CartProvider";

import styles from "./AddToCartButton.module.css";

const AddToCartButton = (props) => {
  const { cart, addToCart } = useContext(CartContext);

  // SetItemAdded controls if ItemAddedModal is displayed/hidden.
  const addToCartHandler = (game) => {
    // Iterate through cart.
    for (var i = 0; i <= cart.length; i++) {
      // If end of cart reached, add item.
      if (i === cart.length) {
        props.setItemAdded(true);
        addToCart(game);
        break;
      }

      // If item is in cart and it's item limit is reached.
      if (cart[i].id === game.id && cart[i].quantity >= 10) {
        props.setItemLimitReached(true);
        break;
      }
    }
  };

  return (
    <button
      className={styles.button}
      onClick={() =>
        addToCartHandler(
          props.game,
          props.setItemAdded,
          props.setItemLimitReached
        )
      }
    >
      Add To Cart
    </button>
  );
};

AddToCartButton.propTypes = {
  game: PropTypes.object,
  setItemAdded: PropTypes.func,
  setItemLimitReached: PropTypes.func,
};

export default AddToCartButton;
