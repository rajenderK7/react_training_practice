import Container from "../UI/Container";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = (props) => {
  const getDeleteItem = (id) => {
    props.getDeleteItemID(id);
  };

  return (
    <Container>
      <ul className={styles.todoList}>
        {props.todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              getDeleteItem={getDeleteItem}
              id={todo.id}
              todo={todo.todo}
              priority={todo.priority}
            ></TodoItem>
          );
        })}
      </ul>
    </Container>
  );
};

export default TodoList;
