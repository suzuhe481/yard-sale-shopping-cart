import Navbar from "./components/Navbar/Navbar";
import GamesContainer from "./components/GamesContainer/GamesContainer";

import styles from "./App.module.css";

// Saves an empty array to local storage if it does not exist.
if (!localStorage.getItem("cart")) {
  var cart = [];

  const game = {
    id: 4286,
    name: "BioShock",
    price: 59.99,
    image:
      "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
    quantity: 2,
  };

  const game2 = {
    id: 58175,
    name: "God of War (2018)",
    price: 59.99,
    image:
      "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
    quantity: 3,
  };

  cart.push(game);
  cart.push(game2);

  localStorage.setItem("cart", JSON.stringify(cart));
}

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <GamesContainer />
    </div>
  );
}

export default App;
