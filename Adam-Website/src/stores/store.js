import { ref } from 'vue'
import { defineStore } from 'pinia'
import ProjectDetails from '../scripts/projectDetails'

export const portfolioStore = defineStore('portfolio', () => {
	const modalDetails = ref(new ProjectDetails("{}"));
	function setProjectModalData(details) {
		if (details instanceof ProjectDetails) {
			modalDetails.value = details;
		}
		else {
			console.error(`${details} not of proper type ProjectDetails`)
		}
	}
	function getModalDetails() {
		return modalDetails.value;
	}
  return { getModalDetails, setProjectModalData };
})