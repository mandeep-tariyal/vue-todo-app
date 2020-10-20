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
    data() {
        return {
            newId: 2
        }
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
    },
    methods: {
        add(newItem: string) {
            this.newId += 1;
            this.todo.push({ id: this.newId, name: newItem, status: false })

        },
        del(id: number) {
            let itemFound: ITodoItem | undefined = this.todo.find(item => item.id === id)
            if (itemFound) {
                let itemIndex = this.todo.indexOf(itemFound)
                this.todo.splice(itemIndex, 1)
            }


        }
    }
});
