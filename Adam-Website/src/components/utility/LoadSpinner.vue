<script setup>
const props = defineProps({classes: String});

</script>

<template>
	<div class="spinner-border" :class="props.classes" role="status">
		<span class="visually-hidden">Loading...</span>
	</div>
</template>