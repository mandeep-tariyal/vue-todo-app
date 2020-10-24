<script lang="ts">

import d from './App.vue_';
export default d.extend();

</script>

<template>
	<div id="app" class="container">
		<Title />

		<div class="media">
			<div class="mr-2">
				<InputForm @NewItemAdded="addList($event)" />

				<ul list-group>
					<ToDoList v-for="item in list" :list="item" :key="item.id"
										@expand="displayTodo($event)" />
					<button class="btn btn btn-danger" @click="hideTodo()"> Collapse</button>
				</ul>
			</div>
			<div class="media-body">
				<ToDo v-if="display" :todo="todo" />
			</div>
		</div>
	</div>

</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
.custom {
	background-color: rgba(115, 115, 134, 0.281);
}
</style>
