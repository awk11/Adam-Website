<script setup>
import { ref } from 'vue';
import Tile from '../../scripts/tile.js'
import ProjectDetails from '../../scripts/projectDetails.js'
import { portfolioStore } from '../../stores/store.js';
import Modal from 'bootstrap/js/dist/modal.js'
import axios from 'axios'
const props = defineProps({project: {type: Tile}});

const loadingModal = ref(false);

function ShowModal() {
	loadingModal.value = true;
	// Make REST call to get project details
	axios.get('http://localhost:11001/projectData', {params: {name: props.project.name}})
		.then(response => {
			let detailsJson = new ProjectDetails(response.data);

			//Create object with details and then add to the store
			let projDetails = new ProjectDetails(detailsJson);
			const store = portfolioStore()
			store.setProjectModalData(projDetails)

			// Open the modal
			const projModal = new Modal('#onload');
			projModal.show();
			loadingModal.value = false;
		})
		.catch(error => {
			console.error(error);
		});
}

</script>

<template>
	<div class="col-xxl-3 col-lg-4 col-md-6 col-sm-12">
		<div v-if="loadingModal" class="loading my-3 text-center">
			<div class="spinner-border" role="status">
				<span class="sr-only"></span>
			</div>
		</div>
		<div v-else class="prj" @click="ShowModal">
			<img class="normal" :src="props.project.normalImg" :alt="project.Name" :title="project.Name" />
			<img class="onhover" :src="props.project.hoverImg" :alt="project.Name" :title="project.Name" />
		</div>
		<p><strong>{{ project.name }}</strong></p>
		<p>{{ project.skills.join(', ') }}</p>
	</div>
</template>