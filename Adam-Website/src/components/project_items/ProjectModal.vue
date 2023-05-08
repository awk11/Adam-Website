<script setup>
import { portfolioStore } from '../../stores/store.js';
import { ref, computed } from 'vue';

const store = portfolioStore();
const MediaZoomed = ref(false);

const modalDetails = computed(() => {
	return store.getModalDetails();
})

function MediaZoom(){
	MediaZoomed.value = !MediaZoomed.value;
}

</script>

<template>
	<div id="onload" class="modal fade" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-dialog-centered modal-xl">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
						<div :class="{'col-md-6': !MediaZoomed, 'col-md-12': MediaZoomed}">
							<div id="carouselControls" class="carousel slide">
								<div class="carousel-inner" @click="MediaZoom">
									<div v-for="(media, index) in modalDetails.mediaRefs" :key="index" class="carousel-item" :class="{ 'active': index === 0 }">
										<div class="d-block w-100 h-100">
											<video v-if="media.includes('.mp4')" controls><source :src="media" type="video/mp4">Your browser does not support the video tag. Sorry about that! Please try again in a more modern browser.</video>
											<iframe v-else-if="media.includes('http')" width="650" height="360" :src="media" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
											<img v-else :src="media" class="d-block w-100 h-100" :alt="`${modalDetails.name} media ${index}`">
										</div>
									</div>
								</div>
								<button class="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Previous</span>
								</button>
								<button class="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Next</span>
								</button>
							</div>
						</div>
						<div class="col-md-6" v-if="!MediaZoomed">
							<h4>{{ modalDetails.name }}</h4>
							<p>{{ modalDetails.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.carousel-item img, video {
	cursor: pointer;
}
</style>