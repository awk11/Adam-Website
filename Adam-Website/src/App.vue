<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import axios from 'axios'

const loading = ref(true);
const editDate = ref(Date());

axios.get("http://localhost:11001/getEditDate")
	.then(response => {
		editDate.value =  new Date(response.data["editDate"]);
		loading.value = false;
	})
	.catch(error => {
		editDate.value = new Date("05-15-2023")
	});
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-theme fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#top">Adam Kaufman</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#siteNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
			<div id="siteNavbar" class="collapse navbar-collapse">
				<ul class="nav navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item"><a class="nav-link" href="#about">ABOUT ME</a></li>
					<li class="nav-item"><a class="nav-link" href="#experience">EXPERIENCE</a></li>
					<li class="nav-item"><a class="nav-link" href="#resume">RESUME</a></li>
				</ul>
			</div>
    </div>
  </nav>

  <RouterView />

	<footer class="container-fluid text-center section">
		<a href="#top" title="To Top">
			<span class="bi bi-chevron-double-up footer-icon"></span>
		</a>
		<p>
			&copy; Made by Adam Kaufman. Last updated on 
			{{ editDate.toLocaleString("en-US", {month: "long", day: "numeric", year: "numeric"}) }}
		</p>
	</footer>
</template>

<style lang="sass">
@import "./assets/styles.scss"
</style>