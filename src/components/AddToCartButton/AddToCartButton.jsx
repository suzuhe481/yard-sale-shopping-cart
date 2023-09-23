import PropTypes from "prop-types";

const addGameToCart = (game) => {
  // Get cart from localStorage
  var cart = JSON.parse(localStorage.getItem("cart"));

  console.log("cart is ", cart);
  console.log("Game added is", game);
  const gameId = game.id;
  console.log(gameId);

  var addNewItem = false;
  for (var i = 0; i < cart.length; i++) {
    var gameInCart = cart[i];
    // console.log("At game ", gameInCart);
    console.log(`${gameInCart.id} and ${gameId}`);

    if (gameInCart.id === gameId) {
      console.log("Incremeneted game");
      //   gameInCart.quantity += 1;

      cart[i].quantity += 1;
      break;
    }

    if (i === cart.length - 1) {
      addNewItem = true;
    }
  }

  if (addNewItem) {
    console.log("Added new game");
    const gameToAdd = {
      id: game.id,
      name: game.name,
      price: 59.99,
      image: game.image,
      quantity: 1,
    };

    cart.push(gameToAdd);
  }

  console.log("New cart: ", cart);

  // Update localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
};

const AddToCartButton = (props) => {
  return <button onClick={() => addGameToCart(props.game)}>Add To Cart</button>;
};

AddToCartButton.propTypes = {
  game: PropTypes.object,
};

export default AddToCartButton;
