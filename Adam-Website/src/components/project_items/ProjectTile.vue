<script setup>
import { ref } from 'vue';
import { ProjectStore, ErrorStore } from '../../stores/store.js';

import Tile from '../../scripts/tile.js'
import ProjectDetails from '../../scripts/projectDetails.js'
import LoadSpinner from '../utility/LoadSpinner.vue';

import Modal from 'bootstrap/js/dist/modal.js'
import axios from 'axios'
const props = defineProps({project: Tile});

const loadingModal = ref(false);

function ShowModal() {
	loadingModal.value = true;
	// Make REST call to get project details
	axios.get('http://localhost:11001/projectData', {params: {name: props.project.name}})
		.then(response => {
			let detailsJson = new ProjectDetails(response.data);

			//Create object with details and then add to the store
			let projDetails = new ProjectDetails(detailsJson);
			const store = ProjectStore();
			store.setProjectModalData(projDetails);

			// Open the modal
			const projModal = new Modal('#onload');
			projModal.show();
			loadingModal.value = false;
		})
		.catch(error => {
			console.error(error);
			ErrorStore().SiteError();
		});
}

</script>

<template>
	<div class="col-xxl-3 col-lg-4 col-md-6 col-sm-12">
		<LoadSpinner v-if="loadingModal" :classes="'spinner-10 my-5 text-center'" />
		<div v-else class="prj" @click="ShowModal">
			<img class="normal" :src="props.project.normalImg" :alt="project.Name" :title="project.Name" />
			<img class="onhover" :src="props.project.hoverImg" :alt="project.Name" :title="project.Name" />
		</div>
		<p><strong>{{ project.name }}</strong></p>
		<p>{{ project.skills.join(', ') }}</p>
	</div>
</template>