<script setup>
import WelcomeChunk from '../components/WelcomeChunk.vue';
import BiographyChunk from '../components/BiographyChunk.vue';
import ExperienceChunk from '../components/ExperienceChunk.vue';
import ResumeChunk from '../components/ResumeChunk.vue';
import ProjectModal from '../components/project_items/ProjectModal.vue';
</script>

<template>
  <main>
		<WelcomeChunk id="welcome" class="bg-theme section" />
		<BiographyChunk id="about" class="section" />
		<ExperienceChunk id="experience" class="section" />
		<ResumeChunk id="resume" class="section" />
  </main>

	<ProjectModal />
</template>
