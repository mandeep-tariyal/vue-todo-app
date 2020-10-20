<template>
	<div id="app" class="container">

		<Title />
		<ToDo :todo="todo " />
		<p>
			{{ JSON.stringify(todo) }}
		</p>
		<div class=" custom">

			<!-- <InputForm @NewItemAdded="add($event)" /> -->

			<!-- //<InputForm2 :newItem.sync="newItem2" />
    //<button @click="add">new add</button> -->

			<!-- <h2 v-if="notCompleted.length>0"> incomplete tasks</h2>

			<ul class="list-group">
				<ListItem @handlerDel="del($event)" v-for="item in notCompleted" :item="item" :key="item.id" />
			</ul>

			<h2 v-if="isCompleted.length>0"> Completed Tasks</h2>

			<ul class="list-group">
				<ListItem @handlerDel="del($event)" v-for="item in isCompleted" :item="item" :key="item.id" />
			</ul> -->

		</div>
	</div>

</template>

<script lang="ts">
import Vue from 'vue';

import Title from './components/Title.vue';
import { ITodoItem } from "./interfaces/ITodoItem";
import ToDo from "./components/ToDo.vue";

export default Vue.extend({
	name: 'App',
	components: {
		Title,
		ToDo
	},
	data() {
		return {

			newId: 2,

			todo: [
				{ id: 1, name: "Buy tea", status: false },
				{ id: 2, name: "Buy banana", status: false }
			] as ITodoItem[]
		}
	},


	methods: {}



	
	
});
</script>

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
