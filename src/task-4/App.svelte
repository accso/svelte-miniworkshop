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

  // TODO: add visibleTodos
</script>

<main>
  <h2>What do you want to do today?</h2>
  <div class="d-flex mt-4">
    <Input type="text" bind:value on:keyup={handleKeyup} />
    <Button color="primary" on:click={addTodo} disabled={!value}>Add</Button>
  </div>

  <!-- TODO: InputGroup with visible options -->

  <ListGroup>
    {#each $todos as todo (todo.id)}
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
