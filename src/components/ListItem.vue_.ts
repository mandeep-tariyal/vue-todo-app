import { ITodoItem } from '@/interfaces/ITodoItem';
import Vue from 'vue';
import { Prop } from 'vue/types/options';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    item: Object as Prop<ITodoItem>,
    color: {
      type: String,
      default: "red"
    }
  }, data() {
    return {
      condition: false,
      variable: this.item.name

    }
  },
  methods: {
    del(id: number) {
      this.$emit("handlerDel", id)

    },
    save(id: number, variable: string) {
      // console.log("save clicked");
      this.$emit("nameUpdate", { itemId: id, itemName: variable })
      this.condition = false;
    },
    edit() {
      this.condition = true;
    }, 
    cancel() {
      return this.condition = false;
    }

  },




});
