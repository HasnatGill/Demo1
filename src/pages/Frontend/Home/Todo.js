import React, { useState } from 'react';

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [...todoList, todo];
    setTodoList(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const removeTodo = (index) => {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    setTodoList(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  React.useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodoList(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo}
            <button type="button" onClick={() => removeTodo(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a todo"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
};

export default Todo;
