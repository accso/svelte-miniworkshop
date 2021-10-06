import type { ITodo } from './model';

export async function getTodos(): Promise<ITodo[]> {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  await new Promise<void>((resolve) =>
    setTimeout(() => resolve(), Math.random() * 250)
  );
  return todos;
}

export async function createTodo(text: string): Promise<ITodo> {
  const todos = await getTodos();
  const todo = { text, id: String(Math.random()), done: false };
  const updatedTodos = [...todos, todo];
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
  return todo;
}

export async function updateTodo(todo: ITodo): Promise<ITodo> {
  const todos = await getTodos();
  const updatedTodos = todos.map((t) => (t.id === todo.id ? todo : t));
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
  return todo;
}

export async function removeTodo(id: string): Promise<void> {
  const todos = await getTodos();
  const updatedTodos = todos.filter((t) => t.id !== id);
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
}
