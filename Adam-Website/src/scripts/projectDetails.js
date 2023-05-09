class ProjectDetails {
	constructor(detailsJson) {
		this.name = detailsJson["name"];
		this.description = detailsJson["description"];
		this.mediaRefs = detailsJson["mediaRefs"];
	}
}

export default ProjectDetails;