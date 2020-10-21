<template>
	<div>
		<li class ="list-group-item list-group-item-primary">
			{{list.name}}
			<button class="btn btn btn-primary" @click="todo(list.id)">Expand</button>

		</li>
		
	</div>
</template>
<script>
import d from "./ToDoList.vue_"
export default d.extend();
</script>


