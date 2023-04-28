<svelte:options tag="todo-list" />

<script lang="ts">
  // components
  import TodoInput from "./TodoInput.svelte";
  import TodoItem from "./TodoItem.svelte";
  // interfaces
  import { type ITodo } from "../interfaces/Todo.interface";

  let todos: ITodo[] = [];

  function addTodo(todo: ITodo) {
    return [...todos, todo];
  }

  function handleSubmitTodo(value: string) {
    const newTodo = {
      id: new Date().getMilliseconds(),
      task: value,
      completed: false,
    };
    todos = addTodo(newTodo);
  }
</script>

<span>Enter a todo:</span>
<TodoInput {handleSubmitTodo} />

<ul>
  {#each todos as todo (todo.id)}
    <TodoItem {todo} />
  {/each}
</ul>
