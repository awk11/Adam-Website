import { ref } from 'vue'
import { defineStore } from 'pinia'
import ProjectDetails from '../scripts/projectDetails'

import Modal from 'bootstrap/js/dist/modal.js'

export const ProjectStore = defineStore('projectstore', () => {
    const modalDetails = ref(new ProjectDetails({}));

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

export const EditorStore = defineStore('editorStore', () => {

	//const list = ["item1", "item2", "item3", "item4", "item5"];

	const interests = ref(["item1", "item2", "item3", "item4", "item5"]);
	const skillsLangs = ref(["item1", "item2", "item3", "item4", "item5"]);
	const skillsSoft = ref(["item1", "item2", "item3", "item4", "item5"]);
	const contacts = ref({"key1": "val1", "key2": "val2", "key3": "val3", "key4": "val4"});
	const bioBlurb = ref("Bio Blurb Area");
	const projects = ref([]);

	return {interests, skillsLangs, skillsSoft, contacts, bioBlurb, projects};
});