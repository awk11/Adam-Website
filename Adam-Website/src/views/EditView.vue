<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { EditorStore } from '../stores/store';
import ErrorModal from '../components/utility/ErrorModal.vue';
import InputList from '../components/editor/InputList.vue';


//Get data from server side
const store = EditorStore();

// const bioBlurb = ref(store.bioBlurb);
function printBlurb() {
	console.log(store.contacts)
};
// console.log(bioBlurb.value);


//create preview functionality

//create save functionality

//store updates locally after initial data pull and only save to server on submit (create store for that)
</script>

<template>
  <div class=" mt-5 section container-fluid">
    <h1 class="mb-5 text-center">Hello Adam, welcome to your personal editor page!</h1>
		<form>
			<div class="row mb-5">
				<div class="col-3">
					<label for="formInterests" class="form-label">Interests</label>
					<InputList listName="interests"/>
				</div>
				<div class="col-3">
					<label for="formSkillsLangs" class="form-label">Skills-Languages</label>
					<InputList listName="skillsLangs"/>
				</div>
				<div class="col-3">
					<label for="formSkillsSoft" class="form-label">Skills-Software</label>
					<InputList listName="skillsSoft"/>
				</div>
				<div class="col-3">
					<label for="formContacts" class="form-label">Contacts</label>
					<InputList listName="contacts"/>
				</div>
			</div>
			<div class="row mb-5">
				<div>
					<label for="formBio" class="form-label">About Me blurb</label>
					<textarea v-model="store.bioBlurb" class="form-control" id="formBio" rows="10"></textarea>
				</div>
			</div>
			<div class="row mb-5">
				<div class="col-2">
					<label for="formProjectList" class="form-label">Select Project</label>
					<textarea class="form-control" id="formProjectList" rows="10"></textarea>
				</div>
				<div class="col-10">
					<div class="row mb-3">
						<div class="col-4">
							<div class="row mb-3">
								<label for="formProjType" class="form-label">Project Type</label>
								<select id="formProjType" class="form-select form-select">
									<option selected value="Professional">Professional</option>
									<option value="College Project">College Project</option>
									<option value="Dont Display">Dont Display</option>
								</select>
							</div>
							<div class="row">
								<label for="formProjTile" class="form-label">Add Tile Media</label>
								<input type="file" class="form-control" id="formProjTile">
							</div>
						</div>
						<div class="col-8">
							<label for="formProjBlurb" class="form-label">Project blurb</label>
							<textarea class="form-control" id="formProjBlurb" rows="5"></textarea>
						</div>
					</div>
					<div class="row">
						<div class="col-4">
							<label for="formProjMedia" class="form-label">Add Media</label>
							<input type="file" class="form-control" id="formProjMedia">
						</div>
						<div class="col-4">
							<label for="formProjMediaList" class="form-label">Edit Media</label>
							<input type="text" class="form-control" id="formProjMediaList">
						</div>
						<div class="col-4">
							<label for="formProjSkills" class="form-label">Project Skills</label>
							<input type="text" class="form-control" id="formProjSkills">
						</div>
					</div>
				</div>
			</div>
			<div class="float-end">
				<button @click="printBlurb" type="button" class="btn btn-primary me-3">Preview</button>
				<button type="button" class="btn btn-primary">Submit</button>
			</div>
		</form>
  </div>


</template>

<style>

</style>
