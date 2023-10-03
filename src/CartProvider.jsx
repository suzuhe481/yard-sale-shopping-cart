import PropTypes from "prop-types";
import { useState, createContext, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  cartTotal: 0,
  cartAmountOfItems: 0,
  animateCartItemAdded: false,
  animateCartItemsRemoved: false,
  addToCart: () => {},
  editCart: () => {},
  removeFromCart: () => {},
});

const CartProvider = (props) => {
  const [cart, setCart] = useState(() => {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  });

  const [cartTotal, setCartTotal] = useState(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));

    var total = 0;
    for (var i = 0; i < cartData.length; i++) {
      total += cartData[i].price * cartData[i].quantity;
    }

    return total;
  });

  const [cartAmountOfItems, setCartAmountOfItems] = useState(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));

    var totalItems = 0;

    for (var i = 0; i < cartData.length; i++) {
      totalItems += Number(cartData[i].quantity);
    }

    return totalItems;
  });

  const [animateCartItemAdded, setAnimateCartItemAdded] = useState(false);
  const [animateCartItemsRemoved, setAnimateCartItemsRemoved] = useState(false);

  // Adding a game to cart
  const addToCart = (game) => {
    var newCart = cart;
    const gameId = game.id;

    // Goes through cart if game is already added.
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
        // If quantity is 10, do not increment
        if (gameInCart.quantity === 10) {
          return;
        }

        newCart[i].quantity += 1;
        break;
      }
    }

    // If game is not in cart, create new item and add to cart.
    if (addNewItem) {
      const gameToAdd = {
        id: game.id,
        name: game.name,
        price: game.price,
        image: game.image,
        quantity: 1,
      };

      newCart.push(gameToAdd);
    }

    // Update cart states
    setCart(newCart);
    setCartTotal((prevTotal) => {
      return (Number(prevTotal) + Number(game.price)).toFixed(2);
    });
    setCartAmountOfItems((prevAmount) => Number(prevAmount) + 1);
    setAnimateCartItemAdded(true);

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Editing current game in cart
  const editCart = (props) => {
    const game = props.item;
    const gameId = game.id;
    const newItemQuantity = event.target[0].value;

    if (newItemQuantity < 1 || newItemQuantity > 10) {
      return;
    }

    var newCart = cart;
    for (let i = 0; i <= cart.length; i++) {
      var gameInCart = cart[i];

      // If reached end of cart, game is not in cart.
      if (i === cart.length) {
        break;
      }

      // If game is already in cart, increment quantity by 1.
      if (gameInCart.id === gameId) {
        newCart[i].quantity = newItemQuantity;
        break;
      }
    }

    props.setIsEditing(false);
    props.setQuantity(newItemQuantity);

    // Calculating new cart total and item amounts.
    var newCartTotal = 0;
    var newCartAmountOfItems = 0;
    for (let i = 0; i < cart.length; i++) {
      newCartTotal += Number(newCart[i].price) * Number(newCart[i].quantity);
      newCartAmountOfItems += Number(newCart[i].quantity);
    }

    // Update cart states
    setCart(newCart);
    setCartTotal(newCartTotal.toFixed(2));
    setCartAmountOfItems(newCartAmountOfItems);
  };

  // Removing a game from cart
  const removeFromCart = (props) => {
    const game = props;

    var newCart = cart;
    const id = game.id;

    // Goes through cart, removes game in cart when id matches.
    for (var i = 0; i < cart.length; i++) {
      var gameInCart = cart[i];

      if (gameInCart.id === id) {
        newCart.splice(i, 1);

        break;
      }
    }

    // Update cart states
    setCart(newCart);
    setCartTotal((prevTotal) => {
      return (
        Number(prevTotal) -
        Number(game.price) * Number(game.quantity)
      ).toFixed(2);
    });
    setCartAmountOfItems(
      (prevAmont) => Number(prevAmont) - Number(game.quantity)
    );
    setAnimateCartItemsRemoved(true);

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Stops cart animation after item added or items removed.
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCartItemAdded(false);
      setAnimateCartItemsRemoved(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cartAmountOfItems]);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotal,
        cartAmountOfItems,
        animateCartItemAdded,
        animateCartItemsRemoved,
        addToCart,
        editCart,
        removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.element,
  item: PropTypes.object,
  setIsEditing: PropTypes.func,
  setQuantity: PropTypes.func,
};

export default CartProvider;
