import "./GoalItem.css";

const GoalItem = (props) => {
  return (
    <div className="w-75 goal-container rounded container mx-auto border border-dark mb-1">
      <div className="goal-item">
        <h3 className="text-white p-2">{props.goalTitle}</h3>
        <h1 className="">7</h1>
      </div>
    </div>
  );
};

export default GoalItem;
