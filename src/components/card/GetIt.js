import styles from "./GetIt.module.css";

function GetIt() {
  return (
    <div>
      Get it as soon as
      <span className={styles["get-it"]}> Today 3 PM - 7 PM</span>
      <p className="fw-bold text-secondary m-1">FREE DELIVERY</p>
    </div>
  );
}

export default GetIt;
