import { useState, Fragment } from "react";
import reactDOM from "react-dom";
import styles from "./GoalForm.module.css";

const GoalForm = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isModalOn, setIsModalOn] = useState(false);

  const changeGoalHandler = (event) => {
    setIsValid(true);
    setEnteredGoal(event.target.value);
  };

  const onNumberChangedHandler = (event) => {
    setIsValid(true);
    setEnteredNumber(event.target.value);
  };

  const formSubitHandler = (event) => {
    event.preventDefault();
    if (enteredGoal.trim().length === 0 || enteredNumber.trim().length === 0) {
      setIsValid(false);
      setEnteredGoal("");
      setEnteredNumber("");
      setIsModalOn(true);
      console.log(isModalOn);
      return;
    }
    const newGoal = {
      id: Math.random() * 100,
      goal: enteredGoal,
      num: enteredNumber,
    };
    props.getNewGoal(newGoal);
    setEnteredGoal("");
    setEnteredNumber("");
  };

  const modalStateHandler = () => {
    setIsModalOn(false);
  };

  const Backdrop = () => {
    return (
      <div className={styles["backdrop"]} onClick={modalStateHandler}></div>
    );
  };

  function Modal() {
    return (
      <div className="modal">
        <h3 onClick={modalStateHandler}>Rajender</h3>
      </div>
    );
  }

  return (
    <Fragment>
      {isModalOn &&
        reactDOM.createPortal(
          <Backdrop />,
          document.getElementById("backdrop")
        )}
      {isModalOn &&
        reactDOM.createPortal(<Modal />, document.getElementById("modal"))}
      <div
        className={`container my-4 w-75 rounded border border-secondary
      } shadow ${styles.goalForm}`}
      >
        <form onSubmit={formSubitHandler}>
          <div className="p-2">
            <label className={`row py-1`}>Goal</label>
            <input
              className={`row form-control border ${
                !isValid ? "border-danger" : "border-secondary"
              } ${isValid ? "" : styles.goalError} ${styles.goalInput}`}
              type="text"
              onChange={changeGoalHandler}
              value={enteredGoal}
            ></input>
            <label className="form-label text-left row">Number</label>
            <input
              type="number"
              className={`form-control ${styles.goalInput} ${
                !isValid ? styles.goalError : ""
              }`}
              onChange={onNumberChangedHandler}
              value={enteredNumber}
            ></input>
          </div>
          <button
            type="submit"
            className={`btn btn-dark my-2 ${styles.goalButton}`}
          >
            Add Goal
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default GoalForm;
