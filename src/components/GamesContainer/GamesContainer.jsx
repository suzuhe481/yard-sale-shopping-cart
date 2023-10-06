import { useState, useEffect, useContext } from "react";

import GameCard from "../GameCard/GameCard";
import ItemAddedModal from "../UI/ItemAddedModal/ItemAddedModal";
import ItemLimitModal from "../UI/ItemLimitModal/ItemLimitModal";
import ToggleSwitch from "../UI/ToggleSwitch/ToggleSwitch";
import { CartContext } from "../../CartProvider";

import styles from "./GamesContainer.module.css";

import snesData from "../../assets/snesData";
import ps1Data from "../../assets/ps1Data";
import xboxData from "../../assets/xboxData";
import modernData from "../../assets/modernData";

// Reads data and transforms it into a separate "games" array with objects.
const readData = (category) => {
  var gamesJSON;

  // Gets appropriate data based on category picked.
  switch (category) {
    case "SNES":
      gamesJSON = snesData.results;
      break;
    case "PS1":
      gamesJSON = ps1Data.results;
      break;
    case "XBOX":
      gamesJSON = xboxData.results;
      break;
    case "MODERN":
      gamesJSON = modernData.results;
      break;
    default:
      gamesJSON = snesData.results;
      break;
  }

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
  const [gamesData, setGamesData] = useState([]);
  const [GameCards, setGamesCards] = useState("");
  const [itemAdded, setItemAdded] = useState(false);
  const [itemLimitReached, setItemLimitReached] = useState(false);
  const [category, setCategory] = useState(() => {
    const categoryData = localStorage.getItem("category");

    return categoryData ? JSON.parse(categoryData) : "";
  });

  const { cartAmountOfItems } = useContext(CartContext);

  // On initial page load
  // Update category state to default and save to localStorage
  useEffect(() => {
    const categoryData = JSON.parse(localStorage.getItem("category"));

    // If no localStorage exists for category
    if (categoryData === null) {
      // Set state
      setCategory("SNES");

      // Set new localStorage
      localStorage.setItem("category", JSON.stringify("SNES"));
    }
  }, []);

  // Hides Item Added Modal
  useEffect(() => {
    // Timer to hide item added modal and item limit reached modal after set time.
    const timer = setTimeout(() => {
      setItemAdded(false);
      setItemLimitReached(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [itemAdded, cartAmountOfItems, itemLimitReached]);

  // Gets and sets Games Data
  useEffect(() => {
    setGamesData(readData(category));
  }, [category]);

  // Creates GameCards
  useEffect(() => {
    setGamesCards(
      gamesData.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          setItemAdded={setItemAdded}
          setItemLimitReached={setItemLimitReached}
        />
      ))
    );
  }, [gamesData]);

  return (
    <>
      <ToggleSwitch category={category} setCategory={setCategory} />
      <div className={styles["games-container"]}>{GameCards}</div>
      {itemAdded && <ItemAddedModal setItemAdded={setItemAdded} />}
      {itemLimitReached && (
        <ItemLimitModal setItemLimitReached={setItemLimitReached} />
      )}
    </>
  );
};

export default GamesContainer;
