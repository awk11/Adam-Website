<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
					<!-- <li class="nav-item"><RouterLink to="/" class="nav-link">Home</RouterLink></li>
					<li class="nav-item"><RouterLink to="/about" class="nav-link">About</RouterLink></li>
					<li class="nav-item"><RouterLink to="/testing" class="nav-link">Test</RouterLink></li> -->
				</ul>
			</div>
    </div>
  </nav>

  <RouterView />

	<footer class="container-fluid text-center section">
		<a href="#top" title="To Top">
			<span class="bi bi-chevron-double-up footer-icon"></span>
		</a>
		<p>&copy; Made by Adam Kaufman. Last updated on May 12<sup>th</sup>, 2023</p>
	</footer>
</template>