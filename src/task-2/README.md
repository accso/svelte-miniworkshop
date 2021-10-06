# Task 2: Implementing the Todo component

## Sub task 1: Make it possible to pass in the TODO as a prop and display the text

Declare an input prop (`export let x`). Show the `todo.text`.

## Sub task 2: Toggle the TODO

Toggle the "done" state with a checkbox. Use `<Input type="checkbox" />` for the checkbox and `<Label>..</Label>` for the text.

Use the event dispatcher to notify of a "change" event

```typescript
import { createEventDispatcher } from 'svelte';
// ...
const dispatch = createEventDispatcher();
// ...
dispatch('eventname', payload)`)
```

## Sub task 3: Removing the TODO

Add a `Button` with an icon (`<Icon name="trash" />`), and fire a "remove" event if it is `click`ed.

## Sub task 4: Editing the TODO text

Introduce another state to the HTML, an edit mode, using an `#if` statement. For the icon to enter the edit mode, use a `Button` with `<Icon name="pencil" />`. You can wrap the two buttons in a `ButtonGroup` for better looks. The HTML of the edit-mode consists of an `Input` and a `Button` with `<Icon name="check2" />`. Add local state to control the editing state and the new text value (similar to the "add TODO input").

## Useful links

- SvelteStrap component library: https://sveltestrap.js.org/?path=/story/components--get-started
- Docs on props: https://svelte.dev/docs#1_export_creates_a_component_prop and https://svelte.dev/docs#Attributes_and_props
- Docs on `#if`: https://svelte.dev/docs#if
- Docs on event listeners: https://svelte.dev/docs#on_element_event
- Docs on `createEventDispatcher`: https://svelte.dev/docs#createEventDispatcher
