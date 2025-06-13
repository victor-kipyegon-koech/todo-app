 import React, { useState, type FormEvent,  } from 'react';
import './styles/App.scss'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/TodoFooter';
import type { Todo } from './types/todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Complete online JavaScript course', completed: true },
    { id: 2, text: 'Jog around the park 3x', completed: false },
    { id: 3, text: '10 minutes meditation', completed: false },
    { id: 4, text: 'Read for 1 hour', completed: false },
    { id: 5, text: 'Pick up groceries', completed: false },
    { id: 6, text: 'Complete Todo App on Frontend Mentor', completed: false },
  ]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [text, setText] = useState<string>('');

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <div className="background">
        {}
        <img
          src="../assets/back.jpg"
          alt="Background pattern"
          className="background-img"
        />
      </div>
      <div className="container">
        <h1 className="header">TODO</h1>
        <TodoInput text={text} setText={setText} addTodo={addTodo} />
        <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
        <Footer
          count={todos.filter(t => !t.completed).length}
          filter={filter}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
          hasCompleted={todos.some(t => t.completed)}
        />
        <p className="drag-hint">Drag and drop to reorder list</p>
      </div>
    </div>
  );
};

export default App;