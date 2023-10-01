import PropTypes from "prop-types";

import styles from "./ItemAddedModal.module.css";

const ItemAddedModal = (props) => {
  return (
    <div className={styles["modal-container"]}>
      <div className={styles["button-container"]}>
        <button
          className={styles["close-button"]}
          onClick={() => {
            props.setItemAdded(false);
          }}
        >
          <i className="fa-solid fa-x"></i>
        </button>
      </div>
      <div className={styles["modal-message"]}>Item added successfully</div>
    </div>
  );
};

ItemAddedModal.propTypes = {
  setItemAdded: PropTypes.func,
};

export default ItemAddedModal;
