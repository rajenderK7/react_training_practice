import Container from "../UI/Container";
import styles from "./TodoList.module.css";

const TodoList = (props) => {
  return (
    <div>
      <Container className={styles.todoList}>
        <ul>
          {props.todos.map((todo) => {
            return (
              <li
                key={todo.id}
              >{`${todo.todo}, Priority: ${todo.priority}`}</li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

export default TodoList;
