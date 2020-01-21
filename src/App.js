import React, { useState } from "react";
import "./App.css";
import ReactPlayer from "react-player";

const initialTodos = [
  {
    id: 1,
    author: "Steve Cockrille",
    url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    follows: 0
  },
  {
    id: 2,
    author: "Lucy",
    url: "https://www.youtube.com/watch?v=yC3H33ONPkA",
    follows: 0
  },
  {
    id: 3,
    author: "Steve Cockrille",
    url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    follows: 0
  }
];

const Todo = props => {
  const getFollows = () => {
    return props.todo.follows > 0 ? props.todo.follows : "No";
  };

  return (
    <div className="Todo shadow-sm mb-1 bg-white rounded">
      <div className="TodoHeader">
        <span>
          <strong>{props.todo.author}</strong>
        </span>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => props.onFollow(props.todo)}
          style={{ color: "white", fontSize: "18px" }}
        >
          + Follow
        </button>
      </div>
      <ReactPlayer url={props.todo.url} controls width="100%" />
      <div className="TodoFooter">{getFollows()} Follows</div>
    </div>
  );
};

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  const handleFollow = (todo) => {
    const newTodos = [...todos];
    const index = newTodos.indexOf(todo);
    newTodos[index].follows++;
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="Todos">
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} onFollow={handleFollow}/>
        ))}
      </div>
    </div>
  );
};

export default App;
