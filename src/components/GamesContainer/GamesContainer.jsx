import GameCard from "../GameCard/GameCard";

import styles from "./GamesContainer.module.css";

// import snesData from "../../assets/snesData";
import randomData from "../../assets/randomData";

// Reads data and transforms it into a separate "games" array with objects.
const readData = () => {
  const gamesJSON = randomData.results;

  const games = [];

  // Gets each games id, name, background image, and platforms.
  // Hardcoded price added since API doesn't supply price.
  gamesJSON.forEach((game) => {
    const gameObject = {};

    gameObject.id = game.id;
    gameObject.name = game.name;
    gameObject.image = game.background_image;

    const platforms = [];
    game.platforms.forEach((platform) => {
      platforms.push(platform.platform.name);
    });
    gameObject.platforms = platforms;
    gameObject.price = 59.99;

    games.push(gameObject);
  });

  return games;
};

const GamesContainer = () => {
  const gamesData = readData();

  const GameCards = gamesData.map((game) => (
    <GameCard key={game.id} game={game} />
  ));

  return <div className={styles["games-container"]}>{GameCards}</div>;
};

export default GamesContainer;
