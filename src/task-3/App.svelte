<script lang="ts">
  import { Button, Input, ListGroup, ListGroupItem } from 'sveltestrap';
  import type { ITodo } from './model';
  import Todo from './Todo.svelte';

  let todos: ITodo[] = []; // TODO replace usages with store

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
        <Todo
          {todo}
          on:change={(e) =>
            (todos = todos.map((t) => (t.id === e.detail.id ? e.detail : t)))}
          on:remove={(e) => (todos = todos.filter((t) => t.id !== e.detail))}
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
