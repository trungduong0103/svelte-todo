<svelte:options tag="todo-input" />

<script lang="ts">
  let inputValue = "";
  export let handleSubmitTodo = (_value: string) => void 0;

  function handleInputChange(
    changeEvent: Event & {
      currentTarget: EventTarget & HTMLInputElement;
    }
  ) {
    inputValue = changeEvent.currentTarget.value;
  }

  function handleInputSubmit(submitEvent: Event) {
    submitEvent.preventDefault();
    handleSubmitTodo(inputValue);
    inputValue = "";
  }
</script>

<input
  autofocus
  value={inputValue}
  on:input={handleInputChange}
  on:keydown={(event) => {
    if (event.key === "Enter") {
      handleInputSubmit(event);
    }
  }}
/>
