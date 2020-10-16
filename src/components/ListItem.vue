<script lang="ts">
import d from "./ListItem.vue_";
export default d.extend();
</script>

<template> 




  
  
  <li class="list-group-item" :class="item.status? 'list-group-item-success' : 'list-group-item-danger'">
  
  <input type = "checkbox" v-model = "item.status"/>
  
  
  {{ item.name }}
    <button class=" btn  btn-outline-danger btn-sm" @click="del(item.id)" > del</button>
    
    <button @click="edit = true" >edit</button>
    <div v-if="edit">
      <input type="text" v-model="item.name" @keyup.enter="add()" >
    </div>
    
  </li>
      
    
 
    
  
</template>
<style scoped>

</style>
