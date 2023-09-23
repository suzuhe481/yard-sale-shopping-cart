import PropTypes from "prop-types";

import styles from "./AddToCartButton.module.css";

const addGameToCart = (game) => {
  // Get cart from localStorage
  var cart = JSON.parse(localStorage.getItem("cart"));

  const gameId = game.id;

  var addNewItem = false;
  for (var i = 0; i < cart.length; i++) {
    var gameInCart = cart[i];

    if (gameInCart.id === gameId) {
      cart[i].quantity += 1;
      break;
    }

    if (i === cart.length - 1) {
      addNewItem = true;
    }
  }

  if (addNewItem) {
    const gameToAdd = {
      id: game.id,
      name: game.name,
      price: 59.99,
      image: game.image,
      quantity: 1,
    };

    cart.push(gameToAdd);
  }

  // Update localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
};

const AddToCartButton = (props) => {
  return (
    <button className={styles.button} onClick={() => addGameToCart(props.game)}>
      Add To Cart
    </button>
  );
};

AddToCartButton.propTypes = {
  game: PropTypes.object,
};

export default AddToCartButton;
