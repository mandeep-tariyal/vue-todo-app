<template>
    <nav class="navbar navbar-dark bg-dark">
            <a  class="navbar-brand"href="#">
                    <img src="/utils/todo-4783676_960_720.webp" width="60" height="30" class="d-inline-block align-top" alt="img" loading="lazy">
                    ToDoApp
                  </a>
            

        </nav>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return {
            title: "My TODO"
        };
    }
})
</script>
