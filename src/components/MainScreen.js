import { useState } from "react";
import GoalsDisplay from "./display_goals/GoalsDisplay";
import GoalForm from "./goal_form/GoalForm";

let intialGoals = [
  {
    id: 1,
    goal: "Rajender",
    num: "7",
  },
  {
    id: 2,
    goal: "Virat Kohli",
    num: "18",
  },
  {
    id: 3,
    goal: "Lionel Messi",
    num: "10",
  },
  {
    id: 4,
    goal: "Zendaya",
    num: "7",
  },
];

const MainScreen = () => {
  const [currentGoals, setCurrenGoals] = useState(intialGoals);

  const getNewGoal = (newGoal) => {
    setCurrenGoals((prevGoals) => {
      return [newGoal, ...prevGoals];
    });
  };

  const deleteItem = (id) => {
    const updatedGoals = currentGoals.filter((goal) => {
      return goal.id !== id;
    });

    setCurrenGoals([...updatedGoals]);
  };

  return (
    <div className="mx-auto w-75">
      <GoalForm getNewGoal={getNewGoal}></GoalForm>
      <GoalsDisplay deleteItem={deleteItem} goals={currentGoals}></GoalsDisplay>
    </div>
  );
};

export default MainScreen;
