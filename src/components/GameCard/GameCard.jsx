import PropTypes from "prop-types";

import AddToCartButton from "../AddToCartButton/AddToCartButton";
import PlatformsList from "./PlatformsList/PlatformsList";

import styles from "./GameCard.module.css";

const GameCard = (props) => {
  const name = props.name;
  const id = props.id;
  const image = props.image;
  const platforms = props.platforms;

  return (
    <div className={styles.card} value={id}>
      <div className={styles["image-container"]}>
        <img className={styles.image} src={image} alt="Game art" />
      </div>
      <p className={styles.name}>{name}</p>
      {/* <p className={styles.platforms}>{platforms}</p> */}
      <PlatformsList platforms={platforms} />

      <AddToCartButton game={props} />
    </div>
  );
};

GameCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  image: PropTypes.string,
  platforms: PropTypes.array,
};

export default GameCard;
