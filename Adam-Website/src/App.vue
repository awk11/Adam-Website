<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'

const isNavOpen = ref(false);
    
function toggleNav () {
	isNavOpen.value = !isNavOpen.value;
}

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#top">Adam Kaufman</a>
      <button class="navbar-toggler" type="button" @click="toggleNav">
        <span class="navbar-toggler-icon"></span>
      </button>
			<div class="collapse navbar-collapse" :class="{ show: isNavOpen }">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item"><a class="nav-link" href="#about">ABOUT ME</a></li>
					<li class="nav-item"><a class="nav-link" href="#experience">EXPERIENCE</a></li>
					<li class="nav-item"><a class="nav-link" href="#resume">RESUME</a></li>
					<!-- <li class="nav-item"><RouterLink to="/" class="nav-link">Home</RouterLink></li>
					<li class="nav-item"><RouterLink to="/about" class="nav-link">About</RouterLink></li>
					<li class="nav-item"><RouterLink to="/testing" class="nav-link">Test</RouterLink></li> -->
				</ul>
			</div>
    </div>
  </nav>

  <RouterView />

	<footer class="container-fluid text-center">
		<a href="#top" title="To Top">
			<span class="bi bi-chevron-double-up style-color"></span>
		</a>
		<p>&copy; Made by Adam Kaufman. Last updated on May 5<sup>th</sup>, 2023</p>
	</footer>
</template>
