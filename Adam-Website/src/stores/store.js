import { ref } from 'vue'
import { defineStore } from 'pinia'
import ProjectDetails from '../scripts/projectDetails'

import Modal from 'bootstrap/js/dist/modal.js'

export const ProjectStore = defineStore('projectstore', () => {
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
});

export const ErrorStore = defineStore('errorStore', () => {
	function SiteError() {
		const errorModal = new Modal('#SiteError');
		errorModal.show();
	}

	return { SiteError };
});