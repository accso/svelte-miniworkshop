import { get } from 'svelte/store';
import type { ITodo } from './model';
import type { todos } from './todos';

describe('Todos Store', () => {
  let store: typeof todos;

  beforeEach(async () => {
    // store = createTodosStore(.. your mock functions ..);
    // Wait a tick to resolve the getTodos mock promise
    await Promise.resolve();
  });

  it('should load todos initially', () => {
    // ...
  });

  it('should create todo', async () => {
    // ...
  });

  it('should update todo', async () => {
    // ...
  });

  it('should remove todo', async () => {
    // ...
  });
});
