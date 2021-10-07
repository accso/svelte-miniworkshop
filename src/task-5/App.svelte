<script lang="ts">
  import {
    Button,
    Input,
    InputGroup,
    ListGroup,
    ListGroupItem,
  } from 'sveltestrap';
  import Todo from './Todo.svelte';
  import { todos } from './todos';

  let visible: 'all' | 'done' | 'open' = 'all';
  let value = '';

  function handleKeyup(evt: KeyboardEvent) {
    if (evt.key !== 'Enter') {
      return;
    }
    addTodo();
  }

  function addTodo() {
    todos.create(value);
    value = '';
  }

  $: visibleTodos = $todos.filter(
    (todo) =>
      visible === 'all' ||
      (visible === 'open' && !todo.done) ||
      (visible === 'done' && todo.done)
  );
</script>

<main>
  <h2>What do you want to do today?</h2>
  <div class="d-flex mt-4">
    <Input type="text" bind:value on:keyup={handleKeyup} />
    <Button color="primary" on:click={addTodo} disabled={!value}>Add</Button>
  </div>

  <InputGroup class="d-flex my-4">
    <Button
      color={visible === 'all' ? 'primary' : 'secondary'}
      on:click={() => (visible = 'all')}>All</Button
    >
    <Button
      color={visible === 'open' ? 'primary' : 'secondary'}
      on:click={() => (visible = 'open')}>Open</Button
    >
    <Button
      color={visible === 'done' ? 'primary' : 'secondary'}
      on:click={() => (visible = 'done')}>Done</Button
    >
  </InputGroup>

  <ListGroup>
    {#each visibleTodos as todo (todo.id)}
      <ListGroupItem>
        <Todo
          {todo}
          on:change={(e) => todos.update(e.detail)}
          on:remove={(e) => todos.remove(e.detail)}
        />
      </ListGroupItem>
    {/each}
  </ListGroup>
</main>

<style>
  main {
    margin: auto;
    max-width: 700px;
  }
</style>
