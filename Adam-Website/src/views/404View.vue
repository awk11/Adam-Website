<script setup>
import { onMounted } from 'vue';
import Modal from 'bootstrap/js/dist/modal.js'

onMounted(() => {
	const errorModal = new Modal('#NotFoundError');
	errorModal.show();
})

</script>

<template>
	<div id="NotFoundError" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ErrorModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-xl">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-3" id="staticBackdropLabel">Page doesnt exist</h1>
				</div>
				<div class="modal-body">
					<h5>
						Sorry, looks like this page doesnt exist. No worries though! You'll be redirected back to the main page in a few seconds.
					</h5>
				</div>
			</div>
		</div>
	</div>
	<meta http-equiv="refresh" content="10;url=/" />
</template>