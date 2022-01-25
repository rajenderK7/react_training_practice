import AppButton from "./AppButton";
import BuyNow from "./BuyNow";
import styles from "./DisplayCard.module.css";
import GetIt from "./GetIt";
import Price from "./Price";

const DisplayCard = (props) => {
  return (
    <div className={styles["display-card"]}>
      <img src={props.link} alt="loading" />
      <div className={styles["item-info"]}>
        <p className="m-0">Sponsored </p>
        <h2 className={styles["item-title"]}>{props.title}</h2>
        <AppButton text="Limited time deal Deal"></AppButton>
        <Price price={props.price}></Price>
        <GetIt></GetIt>
        <BuyNow></BuyNow>
      </div>
    </div>
  );
};

export default DisplayCard;
