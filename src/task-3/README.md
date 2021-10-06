# Task 3: Writing and using a $store

## Sub task 1: Create the store

Use a `writable` to create a `store` which contains the list of TODOs. Call `getTodos` from the `api` and set the TODOs returned from the Promise as the store value.
Create a public API with `create`/`update`/`remove` functions which each call the corresponding `api` and then update the `store` accordingly. Expose `todos` as a public constant with `create`/`update`/`remove`/`subscribe` methods, of which the last just forwards to `store`'s `subscribe`.

## Sub task 2: Use the store

Replace the local `todos` variable with the `todos` import in `App.svelte`. Prepend a `$`-sign to all `todos` where they are read, and replace the modification logic with the corresponding calls to the `todos`-store.

## Useful links

- SvelteStrap component library: https://sveltestrap.js.org/?path=/story/components--get-started
- Docs on creating stores: https://svelte.dev/docs#writable
- Docs on using stores: https://svelte.dev/docs#4_Prefix_stores_with_$_to_access_their_values
