import { writable } from 'svelte/store';
import { removeTodo, getTodos, createTodo, updateTodo } from './api';
import type { ITodo } from './model';

const _todos = writable<ITodo[]>([]);
// TODO fetch todos initially

async function create(text: string) {
  const todo = await createTodo(text);
  _todos.update((todos) => {
    // TODO add new TODO
    return todos;
  });
}

// TODO update/remove

export const todos = {
  // TODO add exports
  create,
  subscribe: _todos.subscribe,
};
