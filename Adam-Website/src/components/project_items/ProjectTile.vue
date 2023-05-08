<script setup>
import Tile from '../../scripts/tile.js'
import ProjectDetails from '../../scripts/projectDetails.js'
import { portfolioStore } from '../../stores/store.js';
import Modal from 'bootstrap/js/dist/modal.js'
const props = defineProps({project: {type: Tile}, index: {type: Number}});

function ShowModal() {
	const store = portfolioStore()
	//TODO: Make REST call to get project details
	let detailsJson = `{"name": "${props.project.name}", "description": "This is a test description", "media": ["/src/assets/AdamK.jpg", "/src/assets/modis.png"]}`;
	//Create object with details and then call its display function to create the ProjectModal and add to DOM
	let projDetails = new ProjectDetails(detailsJson);
	console.log(`Showing modal for ${projDetails.name}`)
	store.openProjectModal(projDetails)
	const myModal = new Modal('#onload');
	myModal.show();
}

</script>

<template>
	<div class="col-sm-3">
		<div class="prj" @click="ShowModal()">
			<img class="normal" :src="props.project.normalImg" alt="" title="" width="250" height="250" />
			<img class="onhover" :src="props.project.hoverImg" :alt="project.Name" :title="project.Name" width="250" height="250" />
		</div>
		<p><strong>{{ project.name }}</strong></p>
		<p>{{ project.skills.join(', ') }}</p>
	</div>
</template>

<style scoped>
/* TODO: Move to SASS */
.prj{
	position: relative;
	max-width: 250px;
	max-height: 250px;
	margin: auto;
	margin-bottom: 10px;
}

.prj img {
	-webkit-transition: opacity .75s ease-in-out;
	-moz-transition: opacity .75s ease-in-out;
	-o-transition: opacity .75s ease-in-out;
	transition: opacity .75s ease-in-out;
	-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .075);
	box-shadow: 0 1px 2px rgba(0, 5, 0, .075);
}
.prj img.normal {
		position: relative;
		margin: auto;
		max-width: 250px;
		max-height: 250px;
}

.prj img.onhover {
		opacity: 0;
		position: absolute;
		top: 0px;
		left: 0px;
		max-width: 250px;
		max-height: 250px;
}

.prj:hover > img.onhover {
	opacity: 1;
}
</style>