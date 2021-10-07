# Task 5: Testing

## Sub task 1: Test todos store

Test the todos store by filling in the blanks in `todos.test.ts`. You will notice soon that it's impossible to reset the state of `todos.ts` between tests, as the API call `getTodos` runs once initially and there's no way to reset the state from the outside. To fix this, move the code in `todos.ts` into a `createTodosStore` function which is handed the API methods as parameters. Export that function and use it to instantiate the `todos` export through `export const todos = createTodosStore(getTodos, ...)`. This way you can now easily use `createTodosStore` in the tests and also easily mock out the API. To get the current value of the `todos` store, you can use the `get` helper function from `svelte/store` (`expect(get(todos)).toEqual([..])`).

## Sub task 2: Test Todo.svelte

Test some parts of `Todo.svelte`: Test that the correct text is displayed, that it's possible to toggle the todo, and that it's possible to remove the todo. Use the `result` of `render` to interact with the DOM of `Todo.svelte`. To get the checkbox use `getByRole('checkbox')`. To get the button you could use `getAllByRole('button')[1]`, but it's better to instead give the delete button an `aria-label="Remove"` and then use `getByLabelText('Remove')` - this way we also made the component more accessible. To listen to the events fired, you can use this pattern:

```ts
let payload;
result.component.$on('eventName', (evt) => evt.detail);
// ..
expect(payload).toEqual(..);
```

## Useful links

- Svelte Testing Library https://testing-library.com/docs/svelte-testing-library/intro
- Unit Testing a Svelte Component https://sveltesociety.dev/recipes/testing-and-debugging/unit-testing-svelte-component/
- Jest API https://jestjs.io/docs/api
