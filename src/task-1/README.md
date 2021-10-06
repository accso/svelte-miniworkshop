# Task 1: Setup a simple list + possibility to add new TODOs

## Sub task 1: Create list

Use an `#each` block with `ListGroupItem`s inside to create a list of todos from the `todos` array. It's enough for now to only show the `todo.text`.

## Sub task 2: Add new item to the list

Use an `Input` and a `Button` component. Bind the text value to the `Input`. Listen to the `keyup` event on the `Input` and add the a new TODO to the `todos` list on Enter. Do the same when the user `click`s on the `Button`.

## Useful links

- SvelteStrap component library: https://sveltestrap.js.org/?path=/story/components--get-started
- Docs on `#each`: https://svelte.dev/docs#each
- Docs on event listeners: https://svelte.dev/docs#on_element_event
- Docs on bind: https://svelte.dev/docs#bind_element_property
