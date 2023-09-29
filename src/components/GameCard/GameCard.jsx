import PropTypes from "prop-types";

import AddToCartButton from "../AddToCartButton/AddToCartButton";
import PlatformsList from "./PlatformsList/PlatformsList";

import styles from "./GameCard.module.css";

const GameCard = (props) => {
  const game = props.game;
  const name = game.name;
  const id = game.id;
  const image = game.image;
  const platforms = game.platforms;

  return (
    <div className={styles.card} value={id}>
      <div className={styles["image-container"]}>
        <img className={styles.image} src={image} alt="Game art" />
      </div>
      <p className={styles.name}>{name}</p>
      <PlatformsList platforms={platforms} />

      <AddToCartButton game={game} />
    </div>
  );
};

GameCard.propTypes = {
  game: PropTypes.object,
};

export default GameCard;
