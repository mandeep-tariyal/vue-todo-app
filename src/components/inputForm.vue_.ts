
import Vue from 'vue'

export default Vue.extend({
   name:"InputForm" ,
   data(){
       return{
           newItem:""
       }
   },
   methods:{
     add(){
this.$emit("NewItemAdded", this.newItem);
this.newItem=""
     }  
   }


       
})
