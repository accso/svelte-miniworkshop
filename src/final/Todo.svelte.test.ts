import { render } from '@testing-library/svelte';
import Todo from './Todo.svelte';

describe('Todo.svelte', () => {
  test('should render todo text', () => {
    const results = render(Todo, {
      props: { todo: { id: 'id', text: 'text', done: false } },
    });
    expect(() => results.getByText('text')).not.toThrow();
  });

  test('should toggle todo', () => {
    let todo = { id: 'id', text: 'text', done: false };
    const results = render(Todo, {
      props: { todo: todo },
    });
    results.component.$on('change', (evt) => (todo = evt.detail));
    results.getByRole('checkbox').click();
    expect(todo).toEqual({ id: 'id', text: 'text', done: true });
  });

  test('should delete todo', () => {
    const results = render(Todo, {
      props: { todo: { id: 'id', text: 'text', done: false } },
    });
    let called = false;
    results.component.$on('remove', () => (called = true));
    results.getByLabelText('Remove').click();
    expect(called).toBe(true);
  });
});
