import { useState } from "react";
import GoalsDisplay from "./display_goals/GoalsDisplay";
import GoalForm from "./goal_form/GoalForm";

let intialGoals = [
  {
    id: 1,
    goal: "Rajender",
  },
  {
    id: 2,
    goal: "Rajender",
  },
  {
    id: 3,
    goal: "Rajender",
  },
  {
    id: 4,
    goal: "Rajender",
  },
];

const MainScreen = () => {
  const [currentGoals, setCurrenGoals] = useState(intialGoals);

  const getNewGoal = (newGoal) => {
    setCurrenGoals((prevGoals) => {
      return [newGoal, ...prevGoals];
    });
  };

  return (
    <div className="mx-auto w-75">
      <GoalForm getNewGoal={getNewGoal}></GoalForm>
      <GoalsDisplay goals={currentGoals}></GoalsDisplay>
    </div>
  );
};

export default MainScreen;
