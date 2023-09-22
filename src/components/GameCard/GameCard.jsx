import styles from "./GameCard.module.css";

const GameCard = (props) => {
  console.log(props);

  return <div className={styles.card}>{props.name}</div>;
};

export default GameCard;
