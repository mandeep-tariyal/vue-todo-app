<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Title />
    <ul>
      <ListItem v-for="item in items" :item="item" :key="item.id"/>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ListItem from './components/ListItem.vue';
import Title from './components/Title.vue';

export default Vue.extend({
  name: 'App',
  components: {
    ListItem,
    Title
  },
  data(){
    return {
      newMsg: "Welcome to Your Vue.js + TypeScript App",
      items: [
        {id: 1, name: "buy tea"},
        {id: 2, name: "buy banana"}
        ]
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
