<script setup>
import { ref} from 'vue';
import axios from 'axios'
import { ErrorStore } from '../stores/store';
import LoadSpinner from './utility/LoadSpinner.vue';

const loading = ref(true);
const bioBlurb = ref("");
const interests = ref([]);
const languages = ref([]);
const software = ref([]);
const contacts = ref({});

axios.get("http://localhost:11001/getBio")
	.then(response => {
		let data = response.data
		bioBlurb.value = data["bio"];
		interests.value = data["interests"];
		languages.value = data["langs"];
		software.value = data["software"];
		contacts.value = data["contacts"];
		loading.value = false;
	})
	.catch(error => {
		console.error(error);
		ErrorStore().SiteError();
	});

</script>

<template>
	<div>
		<div class="container-fluid">
			<div class="row">
				<h3>About Me</h3>
			</div>
			<div class="row">
				<LoadSpinner v-if="loading" :classes="'spinner-8 m-5'" />
				<div v-else class="col-md-10 col-sm-12">
					<h5 v-html="bioBlurb"></h5>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-3 col-md-6 col-sm-12">
					<h4>Interested Fields</h4>
					<LoadSpinner v-if="loading" :classes="'spinner-6 m-5 d-flex justify-content-left'" />
					<ul v-else class="list-group">
						<li v-for="i in interests" class="list-group-item"  :key="i"><h5>{{ i }}</h5></li>
					</ul>
				</div>
				<div class="col-lg-5 col-md-6 col-sm-12">
					<h4>Skillset</h4>
					<LoadSpinner v-if="loading" :classes="'spinner-6 m-5 d-flex justify-content-left'" />
					<div v-else>
						<h5>Languages & Libraries:</h5>
						<div class="row">
							<h5 v-for="l in languages" class="col-xl-3 col-4 mb-1" :key="l">{{ l }}</h5>
						</div>
						<h5 class="mt-3">Software & IDE's:</h5>
						<div class="row">
							<h5 v-for="s in software" class="col-xl-3 col-4 mb-1" :key="s">{{ s }}</h5>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-sm-12">
					<h4>Education</h4>
					<ul class="list-group">
						<li class="list-group-item"><h5>University: Rochester Institute of Technology</h5></li>
						<li class="list-group-item"><h5>Graduation: May 2017 Summa Cum Laude</h5></li>
						<li class="list-group-item"><h5>Degree: Bachelor of Science</h5></li>
						<li class="list-group-item"><h5>Major: Game Design & Development</h5></li>
						<li class="list-group-item"><h5>Minors: Archaeology, Political Science</h5></li>
					</ul>
					<h4>Contact Info & Links</h4>
					<LoadSpinner v-if="loading" :classes="'spinner-6 m-5 d-flex justify-content-left'" />
					<ul v-else class="list-group">
						<li v-for="(v, k) in contacts" class="list-group-item" :key="k">
							<h5>
								{{ k }}:
								<a v-if="v.includes('http')" :href="v">{{ v }}</a>
								<span v-else>{{ v }}</span>
							</h5>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>