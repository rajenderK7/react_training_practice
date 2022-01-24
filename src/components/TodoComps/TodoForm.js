import { useForm } from "react-hook-form";
import AppButton from "../UI/AppButton";
import Container from "../UI/Container";
import styles from "./TodoForm.module.css";

const UserForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { todo: "", priority: "" } });

  const addTodoHandler = (todoObj, event) => {
    const newTodo = {
      id: Math.random() * 100,
      todo: todoObj.todo,
      priority: todoObj.priority,
    };
    props.addTodo(newTodo);
    reset();
  };

  return (
    <div>
      <Container>
        <form className={styles.input} onSubmit={handleSubmit(addTodoHandler)}>
          <div>
            <label htmlFor="todo">To Do</label>
            <input
              id="todo"
              type="text"
              autoComplete="off"
              {...register("todo", { required: true })}
            ></input>
            {errors.todo && (
              <p className="text-start text-danger">*Required Todo</p>
            )}
          </div>
          <div>
            <label htmlFor="priority">Priority</label>
            <input
              id="priority"
              type="number"
              min={1}
              max={5}
              {...register("priority", { required: true })}
            ></input>
            {errors.priority && (
              <p className="text-danger text-start m-0 p-0">
                *Required Priority
              </p>
            )}
          </div>
          <AppButton buttonType="submit">Add To-do</AppButton>
        </form>
      </Container>
    </div>
  );
};

export default UserForm;
