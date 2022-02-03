import styles from "./BuyNow.module.css";

function BuyNow(props) {
  return (
    <div>
      <button className={styles["buy-now"]}>{props.children}</button>
    </div>
  );
}

export default BuyNow;
