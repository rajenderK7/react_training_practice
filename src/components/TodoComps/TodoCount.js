import Container from "../UI/Container";

const TodoCount = (props) => {
  return (
    <Container>
      <h2 className="text-start text-success px-2 p-1">{`Todo Count: ${props.todoCount}`}</h2>
    </Container>
  );
};

export default TodoCount;
