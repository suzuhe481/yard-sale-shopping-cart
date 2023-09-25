import PropTypes from "prop-types";

import styles from "./AddToCartButton.module.css";

const addGameToCart = (game) => {
  // Get cart from localStorage
  var cart = JSON.parse(localStorage.getItem("cart"));

  const gameId = game.id;

  var addNewItem = false;
  for (var i = 0; i <= cart.length; i++) {
    var gameInCart = cart[i];

    // If reached end of cart, game is not in cart.
    if (i === cart.length) {
      addNewItem = true;
      break;
    }

    // If game is already in cart, increment quantity by 1.
    if (gameInCart.id === gameId) {
      cart[i].quantity += 1;
      break;
    }
  }

  // If game is not in cart, create new item and add to cart.
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
