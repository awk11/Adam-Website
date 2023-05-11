<script setup>
import { ref } from 'vue';
import { ErrorStore } from '../stores/store';
import axios from 'axios'

import LoadSpinner from './utility/LoadSpinner.vue';

const loading = ref(true);
const welcomeMedia = ref("");

axios.get("http://localhost:11001/getWelcome")
	.then(response => {
		let data = response.data
		welcomeMedia.value = data["welcomeMedia"];
		loading.value = false;
	})
	.catch(error => {
		console.error(error);
		ErrorStore().SiteError();
	});
</script>

<template>
	<div>
		<div class="jumbotron text-center">
			<h1>Adam Kaufman</h1>
			<p>Developer Portfolio</p>
			<LoadSpinner v-if="loading" :classes="'spinner-12 my-3 text-center'" />
			<img v-else :src="welcomeMedia" class="rounded-circle img-fluid" alt="Adam Kaufman (me)" width="350" height="350">
		</div>
	</div>
</template>