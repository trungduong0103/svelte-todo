<script lang="ts">
  import type { ITodo } from "../interfaces/Todo.interface";

  export let todo: ITodo;
</script>

<li>
  <span>{todo.task}</span>
</li>
