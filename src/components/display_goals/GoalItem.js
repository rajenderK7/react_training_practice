// import "./GoalItem.css";
import styles from "./GoalItem.module.css";

const GoalItem = (props) => {
  const onDeleteClickHandler = () => {
    props.deleteItemHandler(props.id);
  };

  return (
    <li className="list-item" onClick={onDeleteClickHandler}>
      <div
        className={`w-75 rounded container mx-auto border border-dark mb-1 ${styles.goalContainer}`}
      >
        <div className={styles.goalItem}>
          <h3 className="text-white p-2">{props.goalTitle}</h3>
          <h1 className="">{props.goalNumber}</h1>
        </div>
      </div>
    </li>
  );
};

export default GoalItem;
