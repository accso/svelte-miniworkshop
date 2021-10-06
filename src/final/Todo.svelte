<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  import { Button, ButtonGroup, Icon, Input, Label } from 'sveltestrap';
  import type { ITodo } from './model';

  export let todo: ITodo;

  let value = '';
  let isEditing = false;
  const dispatch = createEventDispatcher<{ change: ITodo; remove: string }>();

  function handleKeyup(evt: KeyboardEvent) {
    if (evt.key !== 'Enter') {
      return;
    }
    updateText();
  }

  function edit() {
    value = todo.text;
    isEditing = true;
  }

  function updateText() {
    todo = { ...todo, text: value };
    dispatch('change', todo);
    value = '';
    isEditing = false;
  }

  function remove() {
    dispatch('remove', todo.id);
  }

  function toggleDone() {
    todo = { ...todo, done: !todo.done };
    dispatch('change', todo);
  }
</script>

<div class="d-flex align-items-center" in:fade>
  {#if isEditing}
    <Input type="text" bind:value on:keyup={handleKeyup} />
    <Button color="primary" on:click={updateText}>
      <Icon name="check2" />
    </Button>
  {:else}
    <Input
      id={todo.id}
      type="checkbox"
      checked={todo.done}
      on:change={toggleDone}
    />
    <Label for={todo.id} style="width: 100%">
      {todo.text}
    </Label>
    <ButtonGroup>
      <Button on:click={edit}>
        <Icon name="pencil" />
      </Button>
      <Button on:click={remove}><Icon name="trash" /></Button>
    </ButtonGroup>
  {/if}
</div>
