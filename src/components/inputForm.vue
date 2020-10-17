<template>
    <div>        
    <div class="input-group mb-3">
      <input type="text" class="form-control" v-model="newItem"  placeholder="Add Todo">
      <div class="input-group-append">
        <button  class="btn btn-outline-dark"  @click="add()" :disabled="newItem.length < 3">ADD</button>
      </div>
    </div>
    </div>
</template>

<script>
import d from './inputForm.vue_';
export default d.extend();
</script>


