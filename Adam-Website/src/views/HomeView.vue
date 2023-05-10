<script setup>
import WelcomeChunk from '../components/WelcomeChunk.vue';
import BiographyChunk from '../components/BiographyChunk.vue';
import ExperienceChunk from '../components/ExperienceChunk.vue';
import ResumeChunk from '../components/ResumeChunk.vue';
import ProjectModal from '../components/project_items/ProjectModal.vue';
</script>

<template>
  <main>
		<WelcomeChunk id="welcome"/>
		<BiographyChunk id="about"/>
		<ExperienceChunk id="experience"/>
		<ResumeChunk id="resume"/>
  </main>

	<ProjectModal />
</template>

<!-- <style scoped>

#welcome {
	background-color: #19aae0;
	color: white;
	padding: 60px 50px;
	font-family: Montserrat, sans-serif;
	margin-bottom: 0;
}

#about {
	color: white; 
	background-color: red;
	padding: 60px 50px;
}

#experience {
	color: white; 
	background-color: green; 
	padding: 60px 50px;
}

#resume {
	color: white; 
	background-color: purple; 
	padding: 60px 50px;
}

</style> -->