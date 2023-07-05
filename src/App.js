import { useState } from "react";
import "./App.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Container, FormContainer, FormInput, Todo, TodoContainer, TodoIcons, TodosContainer, TodosListContainer } from "./Styled";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editInput, setEditInput] = useState("");
  const [editTodo, setEditTodo] = useState();

  const handleSubmit = function (e) {
    setInput("");
    e.preventDefault();
  };

  const handleChange = function (e) {
    setInput(e.target.value);
  };

  const onEditInput = (e) => setEditInput(e.target.value);

  const onEdit = (todoID) => {
    const editTodo = todos.find(todo => todo.id === todoID);
    setEditTodo(editTodo);
    setEditInput(editTodo.value);
  };

  const addTodo = () => {
    if (input !== "") {
      const newTodo = { id: Math.floor(Math.random() * 100000), value: input };
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
    }
  };

  const updateTodo = () => {
    const updatedTodo = {...editTodo, value: editInput};
    const newTodos = [...todos];
    const editTodoIndex = todos.findIndex(todo => todo.id === updatedTodo.id);
    newTodos.splice(editTodoIndex, 1, updatedTodo);
    setTodos(newTodos);
    setEditInput("");
    setEditTodo();
  };

  const removeTodo = (id) => {
    const removedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removedTodos);
  };


  
  return (
    <Container>
      <h1>Todo App</h1>
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          className=""
          placeholder="Write your task here"
          value={input}
          onChange={handleChange}
        ></FormInput>
        <Button className="" onClick={addTodo}>
          Add Todo
        </Button>
      </FormContainer>

      {/*Todo List*/}

      {editTodo && <FormContainer className="">
        <FormInput
          className=""
          placeholder="Update your task here"
          value={editInput}
          onChange={onEditInput}
          
        ></FormInput>
        <Button type="button" className="" onClick={updateTodo}>
          Update Todo
        </Button>
      </FormContainer>}
      <TodosListContainer
      >
        {todos.map((todo) => {
          if (todo.value !== "")
            return (
              <TodoContainer
                key={todo.id}
              >
                <Todo>{todo.value}</Todo>
                <TodoIcons>
                  <DeleteIcon
                    className=""
                    onClick={() => removeTodo(todo.id)}
                  />
                  <EditIcon onClick={() => {onEdit(todo.id)}} />  
                  
                </TodoIcons>
              </TodoContainer>
            );
        })}
      </TodosListContainer> 
    </Container>
  );
}

export default App;
