import styles from "./DisplayCard.module.css";

const DisplayCard = () => {
  return (
    <div className={styles["display-card"]}>
      <img
        src="https://images-eu.ssl-images-amazon.com/images/I/41jr5nrfFoL._SX300_SY300_QL70_FMwebp_.jpg"
        alt="loading"
      />
      <h1>Rajender</h1>
    </div>
  );
};

export default DisplayCard;
