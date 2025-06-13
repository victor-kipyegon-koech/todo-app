 import React from 'react';
import { type Todo } from '../types/todo';
import TodoItem from './TodoItem';

type Props = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
    ))}
  </ul>
);

export default TodoList;

