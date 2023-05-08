<script setup>
import ProjectTile from './project_items/ProjectTile.vue';
import Tile from '../scripts/tile.js';

function GetProjects(type) {
	//TODO: Make call to backend with type to get list of projects with tile info for each
	var tiles = [];
	for (let i = 1; i < 5; i++) {
		tiles.push(new Tile(`Project ${i} ${type}`, 
			"/src/assets/modis.png", 
			"/src/assets/modisTop.png", 
			["Skill1", "Skill2", "Skill3"]));
	}
	return tiles;
}

</script>

<template>
	<div>
		<div class="container-fluid text-center">
			<h2>Experience</h2>
			<h4>Select a tile to learn more about a project. Enlarge or minimize a picture by clicking on it. If the site is slow/fails to load anything, I'm using the free subscription for azure to host it, so that's the cause.</h4>
			<h4>Professional Work</h4>
			<div class="row">
				<ProjectTile v-for="(proj, i) in GetProjects('Professional')" :key="i" :project="proj" :index="i"/>
			</div>
			<h4>Web Development</h4>
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
			</div>
		</div>
	</div>
</template>