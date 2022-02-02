import BuyNow from "./BuyNow";
import styles from "./DisplayCard.module.css";
import Price from "./Price";

const DisplayCard = (props) => {
  return (
    <div className={styles["display-card"]}>
      <img src={props.link} alt="loading" />
      <div className={styles["item-info"]}>
        <h2 className={styles["item-title"]}>{props.title}</h2>
        <Price
          price={props.price}
          category={props.category}
          rating={props.rating}
        ></Price>
        <BuyNow></BuyNow>
      </div>
    </div>
  );
};

export default DisplayCard;
