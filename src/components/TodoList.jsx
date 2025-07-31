import React from "react";
import TodoItem from "./TodoItem";
import { AnimatePresence } from "framer-motion";

const TodoList = ({ todos, onToggle }) => {
  return (
    <div className="todo-list">
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TodoList;
