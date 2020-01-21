import React, { useState, useEffect } from "react";
import "./App.css";

const initialTodos = [
  {
    text: "React Concepts",
    isCompleted: false
  },
  {
    text: "React hooks",
    isCompleted: false
  },
  {
    text: "React components",
    isCompleted: false
  }
];

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (value) addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", marginTop: "10px" }}>
      <input
        style={{ width: "100%" }}
        type="text"
        placeholder="Add Todo Text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

function Todo({ index, todo, addTodo, completeTodo, deleteTodo, isBorder }) {
  
  const getBadgeClasses = () => {
    let classes = "badge badge-";
    classes += todo.isCompleted ? "primary" : "secondary";
    return classes;
  }

  return (
    <div
      className="Todo"
      style={{ borderBottomWidth: isBorder ? "2px" : "0px" }}
    >
      <span className={getBadgeClasses()}>{todo.text}</span>
      <div>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => completeTodo(index)}
          style={{ marginRight: "10px" }}
        >
          Complete
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteTodo(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    console.log(todos.length);
    return function() {};
  }, [todos]);

  useEffect(() => {
    const mouseMove = e => {
      console.log(e);
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const addTodo = text => {
    console.log(text);
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="Todos">
        {todos.length > 0
          ? todos.map((todo, index) => (
              <Todo
                key={index}
                index={index}
                todo={todo}
                addTodo={addTodo}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
                isBorder={index == todos.length - 1}
              />
            ))
          : "Empty Todos"}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
