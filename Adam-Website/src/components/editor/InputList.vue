<script setup>
import { VueDraggable } from '../../../node_modules/vue-draggable-plus/dist/vue-draggable-plus'
import { ref } from 'vue';
import { EditorStore } from '../../stores/store';

const props = defineProps({listName: String});
const store = EditorStore();
const list = store[props.listName];
const newItem = ref("");
const reloadList = ref(0);

//function for removing from list on delete click
function RemoveItem(i) {
	if (confirm(`Are you sure you want to delete ${store[props.listName][i]} from ${props.listName}?`)) {
		store[props.listName].splice(i, 1)
		console.log("Deleted")
		reloadList.value+=1;
	}
};

//function for adding item to list
function AddItem() {
	if (newItem.value) {
		store[props.listName].push(newItem.value);
		newItem.value = "";
		reloadList.value+=1;
	}
};

//drag and drop functionality for list order

//optional select for when used as the select project list

//warning modal asking for confirmation when deleting
</script>

<template>
	<VueDraggable class="list-group i-list" ref="el" v-model="store[props.listName]" :key="reloadList">
		<li v-for="(item, index) in list" class="list-group-item d-flex justify-content-between align-items-center mx-3 my-1" :key="index">
			{{ item }}
			<a @click="RemoveItem(index)" class="float-end btn btn-outline-danger"><i class="bi bi-trash"></i></a>
		</li>
	</VueDraggable>
	<li class="list-group-item mx-3 my-1">
		<div class="input-group">
			<input v-model.trim="newItem"  @keyup.enter="AddItem" type="text" class="form-control" placeholder="Add New" aria-label="new item">
			<button @click="AddItem" :disabled="!newItem" class="btn btn-primary" type="button" id="button-addon2"><i class="bi bi-plus"></i></button>
		</div>
	</li>
</template>

<style>
	.i-list {
		max-height: 10rem;
		overflow-y: scroll;
	}
</style>