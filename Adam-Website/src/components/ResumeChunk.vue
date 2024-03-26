<script setup>
import { ref } from 'vue';
// import { ErrorStore } from '../stores/store';
// import axios from 'axios'
import LoadSpinner from './utility/LoadSpinner.vue';

import data from '../assets/jsonDB/about.json'

const loading = ref(true);
const resumeUrl = ref("");
resumeUrl.value = data["resumeUrl"];
loading.value = false;

// axios.get("http://localhost:11001/getResume")
// 	.then(response => {
// 		resumeUrl.value = response.data["resumeUrl"];
// 		loading.value = false;
// 	})
// 	.catch(error => {
// 		console.error(error);
// 		ErrorStore().SiteError();
// 	});

</script>

<template>
	<div>
		<div class="container-fluid text-center">
			<h3>Resume</h3>
			<LoadSpinner v-if="loading" :classes="'spinner-15 my-5 text-center'" />
			<iframe v-else :src="resumeUrl"></iframe>
		</div>
	</div>
</template>