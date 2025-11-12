import { useState } from 'react';
import TodoTypes from '../todo';
import TodoService from '../TodoServices';
import TodoForm from './TodoForm'; // <-- Make sure the path is correct
import { FaEdit, FaCheck } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const TodoList = () => {
  const [todos, setTodos] = useState<TodoTypes[]>(TodoService.getTodos());
  const [editingTodoId, setEditedTodoId] = useState<number | null>(null);
  const [editedTodoText, setEditedTodoText] = useState<string>("");

  // Function for handling edit actions
  const handleEditStart = (id: number, text: string) => {
    setEditedTodoId(id);
    setEditedTodoText(text);
  };

  const handleEditCancel = () => {
    setEditedTodoId(null);
    setEditedTodoText("");
  };

  const handleEditSave = (id: number) => {
    if (editedTodoText.trim() !== "") {
      const updatedTodo = TodoService.updateTodos({
        id,
        text: editedTodoText,
        completed: false,
      });

      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
      );

      setEditedTodoId(null);
      setEditedTodoText("");
    }
  };

  // Function to delete todo
  const handleDeleteTodo = (id: number) => {
    TodoService.deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="tasks-container">
      <TodoForm setTodos={setTodos} />
      {todos.length === 0 ? (
        <div className="empty-state">No tasks yet. Add one above!</div>
      ) : (
        todos.map((todo) => (
          <div className={`task-item ${editingTodoId === todo.id ? 'editing' : ''}`} key={todo.id}>
            {editingTodoId === todo.id ? (
              <>
                <input
                  type="text"
                  className="edit-input"
                  value={editedTodoText}
                  onChange={(e) => setEditedTodoText(e.target.value)}
                  autoFocus
                />
                <div className="task-buttons">
                  <button className="task-btn edit-btn" onClick={() => handleEditSave(todo.id)}>
                    <FaCheck />
                  </button>
                  <button className="task-btn delete-btn" onClick={handleEditCancel}>
                    <GiCancel />
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="task-text">{todo.text}</span>
                <div className="task-buttons">
                  <button className="task-btn edit-btn" onClick={() => handleEditStart(todo.id, todo.text)}>
                    <FaEdit />
                  </button>
                  <button className="task-btn delete-btn" onClick={() => handleDeleteTodo(todo.id)}>
                    <RiDeleteBin5Fill />
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
