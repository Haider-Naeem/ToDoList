import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const TodoItem = ({ todo, onToggle }) => {
  return (
    <motion.div
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
    </motion.div>
  );
};

export default TodoItem;
