import React, { Dispatch, SetStateAction, useState } from 'react';
import TodoService from '../TodoServices';
import TodoTypes from '../todo';

interface PropTypes {
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

const TodoForm: React.FC<PropTypes> = ({ setTodos }) => {
  const [newTodoText, setNewTodoText] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      const newTodo = TodoService.addTodos(newTodoText);
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodoText("");
    }
  };

  return (
    <div className="input-section">
      <div className="input-container">
        <input
          type="text"
          className="task-input"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          autoFocus
          placeholder="Add a task"
        />
        <button className="add-btn" onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoForm;
