import styles from "./AppButton.module.css";

const AppButton = (props) => {
  return (
    <button
      className={styles.appButton}
      type={`${props.buttonType !== undefined ? props.buttonType : "submit"}`}
    >
      {props.children}
    </button>
  );
};

export default AppButton;
