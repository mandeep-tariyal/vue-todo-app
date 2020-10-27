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
					<ToDoList v-for="item in list"
										:listItem="item" :key="item.id"
										@switch-list="currentSelectedList = $event" />

				</ul>
			</div>
			<div class="media-body">
				{{currentSelectedList.name}}
				<ToDo :todo="currentTodo" @update-name="updateTodoItemName($event)" />
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
