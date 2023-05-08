class ProjectDetails {
	constructor(detailsJson) {
		let details = JSON.parse(detailsJson);
		this.name = details["name"];
		this.description = details["description"];
		this.mediaRefs = details["media"];
	}
}

export default ProjectDetails;