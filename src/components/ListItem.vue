<template>
  <li>{{ item.name }}</li>
</template>

<script lang="ts">
import Vue from 'vue';
import Title from './Title.vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    item: Object,
  }
});
</script>
