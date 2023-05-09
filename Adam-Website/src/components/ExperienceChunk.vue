<script setup>
import { ref } from 'vue';
import ProjectTile from './project_items/ProjectTile.vue';
import Tile from '../scripts/tile.js';

import axios from 'axios'

const projTiles = ref({});
const loading = ref(true);
GetProjects("Professional");

async function GetProjects(type) {
	// Make call to backend with type to get list of projects with tile info for each
	axios.get('http://localhost:11001/tiles', {params: {type: type}})
		.then(response => {
			var tiles = [];
			for (let tile of response.data["tiles"]) {
				tiles.push(new Tile(tile["name"], tile["tileImage"], tile["hoverImage"], tile["skills"]))
			}
			console.log(tiles)
			projTiles.value[type] = tiles;
		})
		.catch(error => {
			console.error(error);
		});
		loading.value = false;
}

</script>

<template>
	<div>
		<div class="container-fluid text-center">
			<h2>Experience</h2>
			<h4>Select a tile to learn more about a project. Enlarge or minimize a picture by clicking on it. If the site is slow/fails to load anything, I'm using the free subscription for azure to host it, so that's the cause.</h4>
			<h4>Professional Work</h4>
			<div class="row">
				<div v-if="loading">Loading...</div>
				<ProjectTile v-else v-for="(proj, i) in projTiles['Professional']" :key="i" :project="proj"/>
			</div>
			<!-- <h4>Web Development</h4>
			<div class="row">
				<ProjectTile v-for="(proj, i) in GetProjects('WebDev')" :key="i" :project="proj" :index="i"/>
			</div>
			<h4>Application Development</h4>
			<div class="row">
				<ProjectTile v-for="(proj, i) in GetProjects('AppDev')" :key="i" :project="proj" :index="i"/>
			</div>
			<h4>Design</h4>
			<div class="row">
				<ProjectTile v-for="(proj, i) in GetProjects('Design')" :key="i" :project="proj" :index="i"/>
			</div> -->
		</div>
	</div>
</template>