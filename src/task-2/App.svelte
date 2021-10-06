<script lang="ts">
  import { Button, Input, ListGroup, ListGroupItem } from 'sveltestrap';
  import type { ITodo } from './model';

  let todos: ITodo[] = [];

  let value = '';

  function handleKeyup(evt: KeyboardEvent) {
    if (evt.key !== 'Enter') {
      return;
    }
    addTodo();
  }

  function addTodo() {
    todos = [...todos, { text: value, done: false, id: String(Math.random()) }];
    value = '';
  }

  // TODO: handle update/removal of todo
</script>

<main>
  <h2>What do you want to do today?</h2>
  <div class="d-flex mt-4">
    <Input type="text" bind:value on:keyup={handleKeyup} />
    <Button color="primary" on:click={addTodo} disabled={!value}>Add</Button>
  </div>

  <ListGroup>
    {#each todos as todo}
      <ListGroupItem>
        {todo.text}
        <!-- TODO: use new Todo.svelte instead -->
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
