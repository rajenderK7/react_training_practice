import GoalItem from "./GoalItem";

const GoalsDisplay = (props) => {
  return (
    <div className="container mx-auto">
      <div className="p-1">
        {props.goals.map((goal) => {
          return <GoalItem key={goal.id} goalTitle={goal.goal}></GoalItem>;
        })}
      </div>
    </div>
  );
};

export default GoalsDisplay;
