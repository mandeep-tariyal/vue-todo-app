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
			currentList: {} as ITodoList,
			display: true


		}
	},
	computed: {
		currentTodo(): ITodoItem[] {
			// console.log( "todo:" + JSON.stringify(this.currentList.todo));
			return this.currentList.todo;
		}
	},


	methods: {
		hideTodo() {
			this.display = false

		},
		addList(newItem: string) {
			this.newId += 1;
			this.list.push({ id: this.newId, name: newItem, todo: [] })
		},
		updateTodoItemName(nameArgs: any) {
			const foundTodoItem = this.currentList.todo.find(i => i.id === nameArgs.itemId);
			if (foundTodoItem) {
				foundTodoItem.name = nameArgs.itemName;
			}
		}
	},

	beforeMount() {
		this.currentList = this.list[0];
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