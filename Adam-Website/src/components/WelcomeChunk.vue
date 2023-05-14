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
			<div v-else class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-touch="false">
				<div class="carousel-inner">
					<div v-for="(img, i) in welcomeMedia" style="transition-duration: 1.5s;" class="carousel-item text-center" :class="{ 'active': i === 0 }" data-bs-interval="6500" :key="i">
						<img :src="img" class="welcome-img rounded img-fluid shadow-lg" alt="Adam Kaufman (me)">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>