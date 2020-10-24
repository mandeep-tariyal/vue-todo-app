<script lang="ts">
import d from "./ListItem.vue_";
export default d.extend();
</script>

<template>

	<li class="list-group-item" :class="item.status? 'list-group-item-success' : 'list-group-item-danger'">

		<input type="checkbox" v-model="item.status" />

	{{ nameState }}	{{ item.name.toUpperCase() }}

		<div class="input-group-append">
			<button class=" btn   btn-danger btn-sm" @click="del(item.id)"> Delete </button>

			<button class="btn  btn-warning btn-sm" @click="edit()"> Edit</button>
		</div>

		<div v-if="condition" class="input-group mb-3">
			<input type="text" class="form-control" v-model="variable" >
		
    	<div class="input-group-append">
				<button type="button" class="btn btn-outline-dark btn-sm " @click="save(item.id,variable)"> SAVE</button>
				<br><button class="btn btn  btn-light btn-sm" @click="cancel()"> Cancel</button>
			</div>
		
    </div>

	</li>

</template>
<style scoped>
</style>
