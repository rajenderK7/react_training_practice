import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const deleteTodoHandler = () => {
    props.getDeleteItem(props.id);
    console.log(props.id);
  };

  return (
    <div>
      <li className={styles.todoItem} onClick={deleteTodoHandler}>
        <h3>{props.todo}</h3>
        <h4>{`Priority: ${props.priority}`}</h4>
      </li>
    </div>
  );
};

export default TodoItem;
