<script lang="ts">
  // components
  import TodoInput from "./TodoInput.svelte";
  import TodoItem from "./TodoItem.svelte";
  // interfaces
  import { type ITodo } from "../interfaces/Todo.interface";

  let todos: ITodo[] = [];

  function addTodo(todo) {
    return [...todos, todo];
  }

  function handleSubmitTodo(value: string) {
    const newTodo = { task: value, completed: false };
    todos = addTodo(newTodo);
  }
</script>

<span>Enter a todo:</span>
<TodoInput {handleSubmitTodo} />

<ul>
  {#each todos as todo}
    <TodoItem {todo} />
  {/each}
</ul>
