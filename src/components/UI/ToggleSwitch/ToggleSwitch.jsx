import PropTypes from "prop-types";

import styles from "./ToggleSwitch.module.css";

const switchCategory = (props, newCategory) => {
  props.setCategory(newCategory);
};

const ToggleSwitch = (props) => {
  const category = props.category;

  return (
    <div className={styles["toggle-container"]}>
      <input
        id="retro"
        className={styles.radio}
        name="selection"
        type="radio"
        onClick={() => {
          switchCategory(props, "RETRO");
        }}
        checked={category === "RETRO" ? "checked" : ""}
      />
      <label className={styles.label} htmlFor="retro">
        <div>Retro</div>
      </label>

      <input
        id="modern"
        className={styles.radio}
        name="selection"
        type="radio"
        onClick={() => {
          switchCategory(props, "MODERN");
        }}
        checked={category === "MODERN" ? "checked" : ""}
      />
      <label className={styles.label} htmlFor="modern">
        <div>Modern</div>
      </label>

      <input
        id="classic"
        className={styles.radio}
        name="selection"
        type="radio"
        onClick={() => {
          switchCategory(props, "CLASSIC");
        }}
        checked={category === "CLASSIC" ? "checked" : ""}
      />
      <label className={styles.label} htmlFor="classic">
        <div>Classic</div>
      </label>

      <input
        id="futuristic"
        className={styles.radio}
        name="selection"
        type="radio"
        onClick={() => {
          switchCategory(props, "FUTURISTIC");
        }}
        checked={category === "FUTURISTIC" ? "checked" : ""}
      />
      <label className={styles.label} htmlFor="futuristic">
        <div>Futuristic</div>
      </label>
    </div>
  );
};

ToggleSwitch.propTypes = {
  category: PropTypes.string,
  setCategory: PropTypes.func,
};

export default ToggleSwitch;
