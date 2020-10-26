<template>
	<li class="list-group-item list-group-item-primary">
		<button class="btn btn-link" @click="$emit('switch-list', list)">{{list.name}}</button>
	</li>
</template>
<script>
import d from "./ToDoList.vue_"
export default d.extend();
</script>


