'use client';

import React from 'react';
import { useTodo } from '@/hooks/useTodo';
import { Header } from '../organisms/Header';
import { SearchForm } from '../molecules/SearchForm';
import { TodoList } from '../organisms/TodoList';
import { MainTemplate } from './MainTemplate';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

export function TodoTemplate() {
  const {
    addTodo,
    updateTodo,
    deleteTodo,
    setSearchQuery,
    setFilterStatus,
    filteredTodos,
  } = useTodo();

  const controls = (
    <>
      <SearchForm onAdd={addTodo} />
      
      <div className="page-filters">
        <Input
          placeholder="Search tasks..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="page-status-filters">
          <Button onClick={() => setFilterStatus('all')} variant="secondary">All</Button>
          <Button onClick={() => setFilterStatus('active')} variant="secondary">Active</Button>
          <Button onClick={() => setFilterStatus('completed')} variant="secondary">Done</Button>
        </div>
      </div>
    </>
  );

  const content = (
    <TodoList
      todos={filteredTodos.map(t => ({ id: t.id, title: t.title, completed: t.completed }))}
      onToggle={(id) => updateTodo(id, { completed: !filteredTodos.find(t => t.id === id)?.completed })}
      onDelete={deleteTodo}
    />
  );

  return (
    <MainTemplate
      header={<Header />}
      controls={controls}
      content={content}
    />
  );
}
