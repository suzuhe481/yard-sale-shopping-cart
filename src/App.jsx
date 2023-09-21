import Navbar from "./components/Navbar/Navbar";
import GamesContainer from "./components/GamesContainer/GamesContainer";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <GamesContainer />
    </div>
  );
}

export default App;
