<script setup>
import { ref } from 'vue';
import axios from 'axios'

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
	});
</script>

<template>
	<div>
		<div class="jumbotron text-center">
			<h1>Adam Kaufman</h1>
			<p>Developer Portfolio</p>
			<div v-if="loading" class="loading col-12 m-5 d-flex justify-content-center">
				<div class="spinner-border" role="status">
					<span class="sr-only"></span>
				</div>
			</div>
			<img v-else :src="welcomeMedia" class="rounded-circle img-fluid" alt="Adam Kaufman (me)" width="350" height="350">
		</div>
	</div>
</template>