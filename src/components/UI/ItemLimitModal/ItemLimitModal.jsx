import PropTypes from "prop-types";

import styles from "./ItemLimitModal.module.css";

const ItemLimitModal = (props) => {
  return (
    <div className={styles["modal-container"]}>
      <div className={styles["button-container"]}>
        <button
          className={styles["close-button"]}
          onClick={() => {
            props.setItemLimitReached(false);
          }}
        >
          <i className="fa-solid fa-x"></i>
        </button>
      </div>
      <div className={styles["modal-message"]}>Item Limit Reached</div>
    </div>
  );
};

ItemLimitModal.propTypes = {
  setItemLimitReached: PropTypes.func,
};

export default ItemLimitModal;
