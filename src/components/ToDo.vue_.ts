import Vue from 'vue';
import ListItem from './ListItem.vue';
import { ITodoItem } from "../interfaces/ITodoItem";
import InputForm from './inputForm.vue';
import { Prop } from 'vue/types/options';

export default Vue.extend({
    name: 'ToDo',
    components: {
        ListItem,
        InputForm
    },
    props: {
        todo: {
            type: Array as Prop<ITodoItem[]>,
            required: true
        }
    },
	computed: {
		isCompleted(): ITodoItem[] {
			return this.todo.filter(item => item.status === true)
		},
		notCompleted(): ITodoItem[] {
			return this.todo.filter(item => item.status === false)
		}
	}
});
