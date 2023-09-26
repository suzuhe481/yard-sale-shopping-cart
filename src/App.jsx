import Navbar from "./components/Navbar/Navbar";
import GamesContainer from "./components/GamesContainer/GamesContainer";

import styles from "./App.module.css";

// Saves an empty array to local storage if it does not exist.
if (!localStorage.getItem("cart")) {
  var cart = [];

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
