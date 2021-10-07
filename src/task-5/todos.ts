import { writable } from 'svelte/store';
import { removeTodo, getTodos, createTodo, updateTodo } from './api';
import type { ITodo } from './model';

const _todos = writable<ITodo[]>([]);
getTodos().then((todos) => _todos.set(todos));

async function create(text: string) {
  const todo = await createTodo(text);
  _todos.update((todos) => {
    return [...todos, todo];
  });
}

async function update(todo: ITodo) {
  const updated = await updateTodo(todo);
  _todos.update((todos) => {
    return todos.map((t) => (t.id === todo.id ? updated : t));
  });
}

async function remove(id: string) {
  await removeTodo(id);
  _todos.update((todos) => todos.filter((t) => t.id !== id));
}

export const todos = {
  create,
  update,
  remove,
  subscribe: _todos.subscribe,
};
