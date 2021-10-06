<script lang="ts">
  import { ListGroup, ListGroupItem, Input, Button } from 'sveltestrap';
  import type { ITodo } from './model';

  const todos: ITodo[] = [];

  // TODO: todo creation
</script>

<main>
  <h2>What do you want to do today?</h2>
  <div class="d-flex mt-4">
    <!-- TODO: Input + Button -->
  </div>

  <ListGroup>
    <!-- TODO: Todo Items -->
  </ListGroup>
</main>

<style>
  main {
    margin: auto;
    max-width: 700px;
  }
</style>
