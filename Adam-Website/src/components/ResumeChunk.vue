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
			<h3>Resume</h3>
			<div v-if="loading" class="loading my-3 text-center">
				<div class="spinner-border" role="status">
					<span class="sr-only"></span>
				</div>
			</div>
			<iframe v-else :src="resumeUrl"></iframe>
		</div>
	</div>
</template>