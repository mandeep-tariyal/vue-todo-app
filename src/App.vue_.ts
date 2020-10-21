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