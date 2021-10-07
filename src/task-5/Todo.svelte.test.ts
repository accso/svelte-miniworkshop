import { render } from '@testing-library/svelte';
import Todo from './Todo.svelte';

describe('Todo.svelte', () => {
  test('should render todo text', () => {
    const results = render(Todo, {
      props: { todo: { id: 'id', text: 'text', done: false } },
    });
    // ...
  });

  test('should toggle todo', () => {
    // ...
  });

  test('should delete todo', () => {
    // ...
  });
});
