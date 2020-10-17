import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    item : Object,
    color: {
      type: String,
      default: "red"
    }
  }, data(){
    return{
      condition :false,
      variable:""
      
    }
  },
  methods:{
    del(id:number){
      this.$emit("handlerDel",id)

    },
    save( variable :string){
      this.item.name = variable
      this.variable=""
      this.condition= false

    },
    edit()
     {
    
      this.variable = this.item.name;
       this.condition =true;
     },cancel()
     {
       return this.condition=false;
     }
  
  },
  
 
  
  
});
