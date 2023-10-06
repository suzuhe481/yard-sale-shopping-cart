import PropTypes from "prop-types";

import styles from "./ToggleSwitch.module.css";

const switchCategory = (props, newCategory) => {
  props.setCategory(newCategory);

  // Update localStorage
  localStorage.setItem("category", JSON.stringify(newCategory));
};

const ToggleSwitch = (props) => {
  // Get category from localStorage
  const category = JSON.parse(localStorage.getItem("category"));

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
        checked={category === "RETRO" ? true : false}
        onChange={() => {}}
      />
      <label className={styles.label} htmlFor="retro">
        <div>SNES</div>
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
        <div>PS1</div>
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
        <div>Xbox</div>
      </label>

      <input
        id="modern"
        className={styles.radio}
        name="selection"
        type="radio"
        onClick={() => {
          switchCategory(props, "MODERN");
        }}
        checked={category === "MODERN" ? true : false}
        onChange={() => {}}
      />
      <label className={styles.label} htmlFor="modern">
        <div>Modern</div>
      </label>
    </div>
  );
};

ToggleSwitch.propTypes = {
  category: PropTypes.string,
  setCategory: PropTypes.func,
};

export default ToggleSwitch;
