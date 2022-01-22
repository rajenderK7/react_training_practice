import GoalItem from "./GoalItem";

const GoalsDisplay = (props) => {
  const deleteItemHandler = (id) => {
    props.deleteItem(id);
  };

  return (
    <div className="container mx-auto">
      <div className="p-1">
        <ul style={{ listStyleType: "none" }} className="d-block mx-auto">
          {props.goals.map((goal) => {
            return (
              <GoalItem
                deleteItemHandler={deleteItemHandler}
                key={goal.id}
                id={goal.id}
                goalTitle={goal.goal}
                goalNumber={goal.num}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GoalsDisplay;
