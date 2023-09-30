import styles from "./ItemAddedModal.module.css";

const ItemAddedModal = () => {
  return (
    <div className={styles["modal-container"]}>
      <div className={styles["modal-message"]}>Item added successfully</div>
    </div>
  );
};

export default ItemAddedModal;
