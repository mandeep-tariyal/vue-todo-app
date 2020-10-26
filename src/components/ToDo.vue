<script lang="ts">
import d from "./ToDo.vue_";
export default d.extend();
</script>

<template>
	<div>
		<InputForm @NewItemAdded="add($event)" />

		<h2 v-if="notCompleted.length>0"> incomplete tasks</h2>

		<ul class="list-group">
			<ListItem @handlerDel="del($event)"
								v-for="item in notCompleted" 
								:item="item" 
								:key="item.id" 
								@nameUpdate="$emit('update-name', $event)" />
		</ul>

		<h2 v-if="isCompleted.length>0"> Completed Tasks</h2>

		<ul class="list-group">
			<ListItem @handlerDel="del($event)" v-for="item in isCompleted" :item="item" :key="item.id" @nameUpdate="emitUpdate($event)" />
		</ul>

	</div>
</template>
