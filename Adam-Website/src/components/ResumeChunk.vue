<script setup>
import { ref } from 'vue';
import axios from 'axios'

const loading = ref(true);
const resumeUrl = ref("");

axios.get("http://localhost:11001/getResume")
	.then(response => {
		resumeUrl.value = response.data["resumeUrl"];
		loading.value = false;
	})
	.catch(error => {
		console.error(error);
	});

</script>

<template>
	<div>
		<div class="container-fluid text-center">
			<h2>Resume</h2>
			<div v-if="loading" class="loading">Loading...</div>
			<iframe v-else :src="resumeUrl"></iframe>
		</div>
	</div>
</template>

<!-- <style scoped>
	iframe {
		width: 75%;
		height: 480px;
	}
</style> -->