import styles from "./AppButton.module.css";

function AppButton(props) {
  return (
    <button type="button" className={styles["app-button"]}>
      {props.text}
    </button>
  );
}

export default AppButton;
