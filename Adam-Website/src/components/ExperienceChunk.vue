<script setup>
import { ref, onMounted } from 'vue';
import { ErrorStore } from '../stores/store';
import ProjectTile from './project_items/ProjectTile.vue';
import Tile from '../scripts/tile.js';

import axios from 'axios'
import Popover from 'bootstrap/js/dist/popover.js'
import LoadSpinner from './utility/LoadSpinner.vue';

const loading = ref(true);
const projTiles = ref({});
const popover = ref(null);
GetProjects("Professional");

onMounted(() => {
	popover.value = new Popover(document.getElementById("toggleOldProjects"));
	popover.value.enable();
});

function toggleCollegeProjects() {
	popover.value.hide();
	loading.value = true;
	if ("College Project" in projTiles.value) {
		console.log("hiding college projects");
		projTiles.value["College Projects"] = projTiles.value["College Project"];
		delete projTiles.value["College Project"];
		loading.value = false;
	} else {
		console.log("showing college projects");
		if ("College Projects" in projTiles.value) {
			projTiles.value["College Project"] = projTiles.value["College Projects"];
			projTiles.value["College Projects"] = null;
			loading.value = false;
		} else {
			GetProjects("College Project");
		}
	}
}


async function GetProjects(type) {
	// Make call to backend with type to get list of projects with tile info for each
	axios.get('/tiles', {params: {type: type}})
		.then(response => {
			var tiles = [];
			for (let tile of response.data["tiles"]) {
				tiles.push(new Tile(tile["name"], tile["tileImage"], tile["hoverImage"], tile["skills"]))
			}
			projTiles.value[type] = tiles;
			loading.value = false;
		})
		.catch(error => {
			console.error(error);
			ErrorStore().SiteError();
		});
}

</script>

<template>
	<div>
		<div class="container-fluid text-center">
			<h3>Experience</h3>
			<div class="row mb-3">
				<h5 class="col-10 mx-auto">Select a tile to learn more about a project or work experience. Enlarge or minimize a picture by clicking on it. If the site is slow/fails to load anything, just reload the page. I'm using the free subscription for azure to host this site, which is fairly slow.</h5>
			</div>
			<LoadSpinner v-if="loading" :classes="'spinner-10 col-12 mx-auto'" />
			<div v-else class="row">
				<ProjectTile v-for="(proj, i) in projTiles['Professional']" :key="i" :project="proj"/>
				<ProjectTile v-for="(proj, i) in projTiles['College Project']" :key="i" :project="proj"/>
			</div>
			<button type="button" id="toggleOldProjects" class="btn bg-theme float-end" @click="toggleCollegeProjects" 
				data-bs-container="body" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-placement="left" 
				data-bs-content="By default everything displayed is my work experience from recent sources and/or in a professional capacity. Click this if you're interested in also seeing some significantly older projects I imported from my original portfolio in .NET (Most of them were made as class projects in college). I mostly just kept these in here to act as a time capsule."
			>
				<span v-if="(projTiles['College Project']?.length ?? 0) > 1">Hide Old Projects</span>
				<span v-else>Load Old Projects</span>
			</button>
		</div>
	</div>
</template>