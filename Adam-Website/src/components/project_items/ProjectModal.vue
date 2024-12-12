<script setup>
import ProjectDetails from '../../scripts/projectDetails';
import { ProjectStore } from '../../stores/store.js';
import { ref, computed, onMounted } from 'vue';

const store = ProjectStore();
const MediaZoomed = ref(false);

onMounted(() => {
	// Add event listener to reset modal settings on close
	document.getElementById('onload').addEventListener('hidden.bs.modal', HidingModal)
})


const modalDetails = computed(() => {
	return store.getModalDetails();
})

function MediaZoom() {
	MediaZoomed.value = !MediaZoomed.value;
}

function HidingModal() {
	MediaZoomed.value = false;
	store.setProjectModalData(new ProjectDetails({}));
}


</script>

<template>
	<div id="onload" class="modal fade" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-dialog-centered modal-xl">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
						<div class="my-auto" :class="{'col-xl-6': !MediaZoomed, 'col-12': MediaZoomed}">
							<div id="carouselControls" class="carousel slide">
								<div class="carousel-inner" @click="MediaZoom">
									<div v-for="(media, index) in modalDetails.mediaRefs" :key="index" class="carousel-item" :class="{ 'active': index === 0 }">
										<video v-if="media.includes('.mp4')" class="d-block mx-auto modalMedia" controls><source :src="media" type="video/mp4">Your browser does not support the video tag. Sorry about that! Please try again in a more modern browser.</video>
										<iframe v-else-if="media.includes('http')" class="d-block mx-auto modalMedia" width="650" height="360" :src="media" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
										<img v-else :src="media" class="d-block mx-auto modalMedia" :alt="`${modalDetails.name} media ${index}`">
									</div>
								</div>
								<button v-if="(modalDetails.mediaRefs?.length ?? 0) > 1" class="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Previous</span>
								</button>
								<button v-if="(modalDetails.mediaRefs?.length ?? 0) > 1" class="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Next</span>
								</button>
							</div>
						</div>
						<div class="col-xl-6" v-if="!MediaZoomed">
							<h4 class="my-4">{{ modalDetails.name }}</h4>
							<p v-html="modalDetails.description"></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>