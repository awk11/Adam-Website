<script setup>
import { ref } from 'vue';
import axios from 'axios'

const bioBlurb = ref("");
const interests = ref([]);
const skills = ref([]);
const contacts = ref({})
const loading = ref(true);

axios.get("http://localhost:11001/getBio")
	.then(response => {
		let data = response.data
		bioBlurb.value = data["bio"];
		interests.value = data["interests"];
		skills.value = data["skills"];
		contacts.value = data["contacts"];
		console.log(`Bio: ${bioBlurb.value}`)
		console.log(`Interests: ${interests.value}`)
		console.log(`skills: ${skills.value}`)
		console.log(`contacts: ${contacts.value}`)
		loading.value = false;
	})
	.catch(error => {
		console.error(error);
	});
</script>

<template>
	<div>
		<div class="container-fluid">
			<div class="row">
				<h2>About Me</h2>
			</div>
			<div class="row">
				<div v-if="loading" class="loading">Loading...</div>
				<div v-else class="col-sm-10">
					<h4>
						{{ bioBlurb }}
					</h4>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-3">
					<h3>Interested Fields</h3>
					<div v-if="loading" class="loading">Loading...</div>
					<ul v-else class="list-group">
						<li v-for="i in interests" class="list-group-item"  :key="i">{{ i }}</li>
					</ul>
				</div>
				<div class="col-sm-3">
					<h3>Skillset</h3>
					<div v-if="loading" class="loading">Loading...</div>
					<ul v-else class="list-group">
						<li v-for="s in skills" class="list-group-item" :key="s">{{ s }}</li>
					</ul>
				</div>
				<div class="col-sm-6">
					<h3>Education</h3>
					<h4>
						University: Rochester Institute of Technology<br />
						Graduation: May 2017 Summa Cum Laude<br />
						Degree: Bachelor of Science<br />
						Major: Game Design & Development<br />
						Minors: Archaeology, Political Science
					</h4>
					<h3>Contact Info & Links</h3>
					<h4 v-for="(v, k) in contacts" :key="k">
						{{ k }}:
						<a v-if="v.includes('http')" :href="v">{{ v }}</a>
						<span v-else>{{ v }}</span>
					</h4>
				</div>
			</div>
		</div>
	</div>
</template>