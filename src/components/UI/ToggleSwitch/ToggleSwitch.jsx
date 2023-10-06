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
        id="snes"
        className={styles.radio}
        name="selection"
        type="radio"
        onClick={() => {
          switchCategory(props, "SNES");
        }}
        checked={category === "SNES" ? true : false}
        onChange={() => {}}
      />
      <label className={styles.label} htmlFor="snes">
        <div>SNES</div>
      </label>

      <input
        id="ps1"
        className={styles.radio}
        name="selection"
        type="radio"
        onClick={() => {
          switchCategory(props, "PS1");
        }}
        checked={category === "PS1" ? "checked" : ""}
        onChange={() => {}}
      />
      <label className={styles.label} htmlFor="ps1">
        <div>PS1</div>
      </label>

      <input
        id="xbox"
        className={styles.radio}
        name="selection"
        type="radio"
        onClick={() => {
          switchCategory(props, "XBOX");
        }}
        checked={category === "XBOX" ? "checked" : ""}
        onChange={() => {}}
      />
      <label className={styles.label} htmlFor="xbox">
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
