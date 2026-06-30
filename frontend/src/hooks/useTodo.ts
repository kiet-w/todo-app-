import { useState, useMemo } from 'react';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface UseTodoReturn {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (id: string, updates: Partial<Omit<Todo, 'id'>>) => void;
  deleteTodo: (id: string) => void;
  setSearchQuery: (query: string) => void;
  setFilterStatus: (status: 'all' | 'active' | 'completed') => void;
  filteredTodos: Todo[];
}

export function useTodo(): UseTodoReturn {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'completed'>('all');

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9),
      title,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const updateTodo = (id: string, updates: Partial<Omit<Todo, 'id'>>) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchesSearch = todo.title.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesFilter = true;
      if (filterStatus === 'active') {
        matchesFilter = !todo.completed;
      } else if (filterStatus === 'completed') {
        matchesFilter = todo.completed;
      }

      return matchesSearch && matchesFilter;
    });
  }, [todos, searchQuery, filterStatus]);

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    setSearchQuery,
    setFilterStatus,
    filteredTodos,
  };
}
