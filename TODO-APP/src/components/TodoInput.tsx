 import React, { type ChangeEvent, type FormEvent } from 'react';

type Props = {
  text: string;
  setText: (text: string) => void;
  addTodo: (e: FormEvent<HTMLFormElement>) => void;
};

const TodoInput: React.FC<Props> = ({ text, setText, addTodo }) => (
  <form onSubmit={addTodo} className="todo-input">
    <input
      type="text"
      placeholder="Create a new todo..."
      value={text}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
    />
  </form>
);

export default TodoInput;

