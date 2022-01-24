import Container from "../UI/Container";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = (props) => {
  return (
    <Container>
      <ul className={styles.todoList}>
        {props.todos.map((todo) => {
          return (
            <TodoItem todo={todo.todo} priority={todo.priority}></TodoItem>
          );
        })}
      </ul>
    </Container>
  );
};

export default TodoList;
