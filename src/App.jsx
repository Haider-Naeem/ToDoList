import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
    ]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app-container">
      <h1 className="title">✨Todo List✨</h1>
      <div className="input-area">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTodo}>➕ Add</button>
      </div>
      <TodoList todos={todos} onToggle={toggleTodo} />
      
    </div>
  );
}

export default App;
