# Task 4: Visible TODOs, finishing touches

## Sub task 1: Visible TODOs

Add a switch to show all or only open/done TODOs. Use a `ButtonGroup` with `Button`s inside for that. Create a local state variable to control the state. Change the `Button`'s `color` to `primary` if it is the selected mode (`color={myState === 'something' ? 'primary' : 'secondary'}`).
Use a reactive statement to introduce a new variable which contains only the TODOs the user wants to see (`$: visibleTodos = ...`) and use it in the `#each` block.

## Sub task 2: Finishing touches

Add a little in-transition by adding `in:fade` to the root `div` in `Todo.svelte`.

## Useful links

- SvelteStrap component library: https://sveltestrap.js.org/?path=/story/components--get-started
- Docs on reactive statements: https://svelte.dev/docs#3_$_marks_a_statement_as_reactive
