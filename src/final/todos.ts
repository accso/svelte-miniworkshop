import { writable } from 'svelte/store';
import { removeTodo, getTodos, createTodo, updateTodo } from './api';
import type { ITodo } from './model';

export function createTodosStore(
  _getTodos: typeof getTodos,
  _createTodo: typeof createTodo,
  _updateTodo: typeof updateTodo,
  _removeTodo: typeof removeTodo
) {
  const _todos = writable<ITodo[]>([]);
  _getTodos().then((todos) => _todos.set(todos));

  async function create(text: string) {
    const todo = await _createTodo(text);
    _todos.update((todos) => {
      return [...todos, todo];
    });
  }

  async function update(todo: ITodo) {
    const updated = await _updateTodo(todo);
    _todos.update((todos) => {
      return todos.map((t) => (t.id === todo.id ? updated : t));
    });
  }

  async function remove(id: string) {
    await _removeTodo(id);
    _todos.update((todos) => todos.filter((t) => t.id !== id));
  }
  return {
    create,
    update,
    remove,
    subscribe: _todos.subscribe,
  };
}

export const todos = createTodosStore(
  getTodos,
  createTodo,
  updateTodo,
  removeTodo
);
