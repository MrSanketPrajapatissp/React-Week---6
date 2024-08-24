import { useState } from "react";
import PropTypes from "prop-types";

let counter = 4;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "go to gym today",
    },
    {
      id: 2,
      title: "go to library",
      description: "go to lib today",
    },
    {
      id: 3,
      title: "go to stationary",
      description: "go to stationary today",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random().toString(),
        description: Math.random().toString(),
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id} // Use todo.id as the key
          title={todo.title}
          description={todo.description}
        />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}

// Add prop-types validation
Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default App;
