import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    item : Object,
    color: {
      type: String,
      default: "red"
    }
  },
  methods:{
    del(id:number){
      this.$emit("handlerDel",id)

    }
  },
  data(){
    return{
      edit:false
    }
  }
  
  
});
