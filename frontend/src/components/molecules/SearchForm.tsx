import React, { useState } from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

interface SearchFormProps {
  onAdd: (title: string) => void;
}

export function SearchForm({ onAdd }: SearchFormProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onAdd(value.trim());
      setValue('');
    }
  };

  return (
    <form className="molecule-search-form" onSubmit={handleSubmit}>
      <Input
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
}
