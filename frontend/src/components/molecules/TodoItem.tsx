import React from 'react';
import { Button } from '../atoms/Button';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className={`molecule-todo-item ${todo.completed ? 'completed' : ''}`}>
      <label className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
        />
        <span className="todo-text">{todo.title}</span>
      </label>
      <Button variant="danger" onClick={() => onDelete(todo.id)} aria-label="Delete">
        X
      </Button>
    </li>
  );
}
