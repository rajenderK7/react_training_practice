import styles from "./Price.module.css";

function Price(props) {
  return (
    <div className={styles["price-template"]}>
      <h5 className={styles["item-price"]}>
        <span>{props.price} </span>
        <span className={styles["item-discount"]}>₹ 1,500</span>
        <span className={styles["item-save"]}> Save ₹1,500</span>
        <span>
          <p className={styles["item-percent"]}>{"(12%)"}</p>
        </span>
      </h5>
    </div>
  );
}

export default Price;
