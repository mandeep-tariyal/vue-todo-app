<template>
  <div class="container" id="app"   >
    
    
    <Title/>
    
    
    <InputForm  
     @NewItemAdded="add($event)"
       />
   
  
    <!-- //<InputForm2 :newItem.sync="newItem2" />
    //<button @click="add">new add</button> -->
    
    <h2 v-if="isCompleted.length>0"> Completed Tasks</h2>
   
    <ul class="list-group">
      <ListItem  @handlerDel="del($event)" v-for="item in isCompleted" :item="item"  :key="item.id"  />
      
    </ul>
  
    <h2 v-if="notCompleted.length>0"> incomplete tasks</h2>
     
     
      <ul class="list-group">
        <ListItem  @handlerDel="del($event)" v-for="item in notCompleted" :item="item"  :key="item.id"/>
      </ul>
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue';
import ListItem from './components/ListItem.vue';
import Title from './components/Title.vue';
import { ITodoItem } from "./interfaces/ITodoItem";
//import InputForm2 from './components/inputForm2.vue';
import InputForm from './components/inputForm.vue';
export default Vue.extend({
  name: 'App',
  components: {
    ListItem,
    Title,
    InputForm
    //InputForm2
  },
  data(){
    return {
      newItem2: "",
      newId: 2,
      todo: [
        {id: 1, name: "buy tea", status:true},
        {id: 2, name: "buy banana",status:true}
        ] as ITodoItem[]
    }
  },
  computed:{
    isCompleted(): ITodoItem[]{
      return this.todo.filter(item => item.status === true)
    },    
    notCompleted(): ITodoItem[]{
      return this.todo.filter(item=> item.status === false)
    }
  }

 , 
  methods:{
    add(newItem: string)
    {
      this.newId+=1;
      this.todo.push({id:this.newId,name:newItem,status:false})
      
    },
    del(id:number){
      let itemFound: ITodoItem|undefined = this.todo.find(item=> item.id === id)
      if(itemFound){
      let itemIndex = this.todo.indexOf(itemFound)
      this.todo.splice(itemIndex,1)
      }
      
    },
   
    
    // add2()
    // {
    //   this.newId+=1;
    //   return this.todo.push({id:this.newId,name:this.newItem2})
    // }
  }
  });
</script>

<style>
#app
 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.custom
 {
  background: blue;
  background-color: aqua
 }

</style>
