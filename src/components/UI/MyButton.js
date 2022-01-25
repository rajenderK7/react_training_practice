import styles from "./MyButton.module.css";

function MyButton(props) {
  return (
    <button
      type={`${props.type ? props.type : "submit"}`}
      className={styles["my-button"]}
    >
      {props.children}
    </button>
  );
}

export default MyButton;
