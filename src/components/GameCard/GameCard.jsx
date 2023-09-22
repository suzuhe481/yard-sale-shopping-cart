import PropTypes from "prop-types";

import styles from "./GameCard.module.css";

const GameCard = (props) => {
  const name = props.name;
  const id = props.id;
  const image = props.image;
  const platforms = props.platforms;
  console.log(props);

  return (
    <div className={styles.card} value={id}>
      <div className={styles["image-container"]}>
        <img className={styles.image} src={image} alt="Game art" />
      </div>
      <p>{name}</p>
      <p>{platforms}</p>
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
