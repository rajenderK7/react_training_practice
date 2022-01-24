import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  return (
    <div>
      <li className={styles.todoItem}>
        <h3>{props.todo}</h3>
        <h4>{props.priority}</h4>
      </li>
    </div>
  );
};

export default TodoItem;
