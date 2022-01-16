import { useState } from "react";
import styles from "./GoalForm.module.css";

const GoalForm = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [isValid, setIsValid] = useState(true);

  const changeGoalHandler = (event) => {
    setIsValid(true);
    setEnteredGoal(event.target.value);
  };

  const formSubitHandler = (event) => {
    event.preventDefault();
    if (enteredGoal.trim().length === 0) {
      setIsValid(false);
      setEnteredGoal("");
      return;
    }
    const newGoal = {
      id: Math.random() * 100,
      goal: enteredGoal,
    };
    props.getNewGoal(newGoal);
    setEnteredGoal("");
  };

  return (
    <div
      className={`container my-4 w-75 rounded border border-secondary shadow ${styles.goalForm}`}
    >
      <form onSubmit={formSubitHandler}>
        <div className="p-2">
          <label className={`row py-1 ${isValid ? "" : "text-danger"}`}>
            Goal
          </label>
          <input
            className={`row form-control border border-dark ${
              isValid ? "" : "bg-danger"
            } ${styles.goalInput}`}
            type="text"
            onChange={changeGoalHandler}
            value={enteredGoal}
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
  );
};

export default GoalForm;
