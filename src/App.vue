<template>
	<div id="app" class="container">

		<Title />
		<InputForm  @NewItemAdded="addList($event)"  />
		<ul list-group>

			<ToDoList
			          v-for="item in list" :list="item" :key="item.id"
			          @expand="displayTodo($event)" @collapse="hideTodo($event)" />
			<button class="btn btn btn-danger" @click="hideTodo()"> Collapse</button>
		</ul>
		<ToDo v-if="display" :todo="todo" />

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
import InputForm from './components/InputForm.vue';
import { ITodoItem } from "./interfaces/ITodoItem";
import { ITodoList } from "./interfaces/ITodoList";
import ToDo from "./components/ToDo.vue";
import ToDoList from "./components/ToDoList.vue";

export default Vue.extend({
	name: 'App',
	components: {
		Title,
		ToDo,
		ToDoList,
		InputForm
	},
	data() {
		return {

			newId: 2,
			list: todoList,
			todo: [] as ITodoItem[],
			display: true


		}
	},


	methods: {
		displayTodo(id: number) {
			let filteredArray = this.list.find(item => item.id === id)
			if (filteredArray) {
				this.todo = filteredArray.todo
			}
			this.display = true;

		},
		hideTodo() {
			this.display = false

		},
		addList( newItem: string){
			this.newId +=1;
			this.list.push({id: this.newId, name: newItem ,todo:[] })
		}
	},

	mounted() {
		this.displayTodo(this.list[0].id);
	}





});

const todoDataOffice: ITodoItem[] = [
	{ id: 1, name: "Metting at 6", status: false },
	{ id: 2, name: "Make PPT", status: false },
	{ id: 3, name: "Appointment with client", status: false }
]
const todoDataHome: ITodoItem[] = [
	{ id: 1, name: "Buy tea", status: false },
	{ id: 2, name: "Buy banana", status: false }
]

const todoList: ITodoList[] = [
	{ id: 1, name: "Office Tasks", todo: todoDataOffice },
	{ id: 2, name: "Home Tasks", todo: todoDataHome }
]
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
