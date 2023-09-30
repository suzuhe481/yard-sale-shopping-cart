import PropTypes from "prop-types";

import AddToCartButton from "../AddToCartButton/AddToCartButton";
import PlatformsList from "./PlatformsList/PlatformsList";

import styles from "./GameCard.module.css";

const GameCard = (props) => {
  const game = props.game;
  const name = game.name;
  const id = game.id;
  const price = game.price;
  const image = game.image;
  const platforms = game.platforms;

  return (
    <div className={styles.card} value={id}>
      <div className={styles["image-container"]}>
        <img className={styles.image} src={image} alt="Game art" />
      </div>
      <p className={styles.name}>{name}</p>
      <PlatformsList platforms={platforms} />

      <div className={styles["price-button-container"]}>
        <div className={styles.price}>${price}</div>
        <AddToCartButton game={game} />
        <div className={styles["limit-notice"]}>Limit 10 per order</div>
      </div>
    </div>
  );
};

GameCard.propTypes = {
  game: PropTypes.object,
};

export default GameCard;
