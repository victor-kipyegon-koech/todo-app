 import React from 'react';
import { type Todo } from '../types/todo';


type Props = {
  todo: Todo;
  toggleTodo: (id: number) => void;
};
const TodoItem: React.FC<Props> = ({ todo, toggleTodo }) => (
  <li
    className={`todo-item ${todo.completed ? 'completed' : ''}`}
    onClick={() => toggleTodo(todo.id)}
  >
    <span className="checkbox"></span>
    <span className="text">{todo.text}</span>
  </li>
);

export default TodoItem;
