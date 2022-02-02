import styles from "./Price.module.css";

function Price(props) {
  return (
    <div className={styles["price-template"]}>
      <h5 className={styles["item-price"]}>
        <span>
          <p className={styles["item-percent"]}>{props.category}</p>
        </span>
        <span>$ {props.price} </span>
        <span>
          <p className={styles["item-percent"]}>Rating: {props.rating} / 5</p>
        </span>
        <span className={styles["item-discount"]}>1,500</span>
        <span className={styles["item-save"]}> Save 1,500</span>
        <span>
          <p className={styles["item-percent"]}>{"(12%)"}</p>
        </span>
      </h5>
    </div>
  );
}

export default Price;
