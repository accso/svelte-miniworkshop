import { get } from 'svelte/store';
import type { ITodo } from './model';
import { createTodosStore, todos } from './todos';

describe('Todos Store', () => {
  let store: typeof todos;

  beforeEach(async () => {
    store = createTodosStore(
      () => Promise.resolve<ITodo[]>([{ id: 'id', text: 'text', done: false }]),
      (text) => Promise.resolve<ITodo>({ id: 'create', text, done: false }),
      (update) => Promise.resolve<ITodo>(update),
      () => Promise.resolve<void>(null)
    );
    // Wait a tick to resolve the getTodos mock promise
    await Promise.resolve();
  });

  it('should load todos initially', () => {
    expect(get(store)).toEqual([{ id: 'id', text: 'text', done: false }]);
  });

  it('should create todo', async () => {
    await store.create('create');
    expect(get(store)).toEqual([
      { id: 'id', text: 'text', done: false },
      { id: 'create', text: 'create', done: false },
    ]);
  });

  it('should update todo', async () => {
    await store.update({ id: 'id', text: 'update', done: false });
    expect(get(store)).toEqual([{ id: 'id', text: 'update', done: false }]);
  });

  it('should remove todo', async () => {
    await store.remove('id');
    expect(get(store)).toEqual([]);
  });
});
