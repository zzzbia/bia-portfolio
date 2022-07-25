import React from "react";

const Projects = () => {
	const myProjects = [
		{
			id: 1,
			title: "Toronto event finder",
		},
	];

	return (
		<section className="work-section" id="work">
			<h2>My Work</h2>

			<div className="work full">
				<a
					className="work-link"
					href="https://benbasic.github.io/Toronto-Event-Finder/"
				>
					Toronto Event Finder
				</a>
				<img
					src="/images/Torontoevent.png"
					alt=" bright led lights toronto sign concert venue"
				/>
			</div>
		</section>
	);
};

export default Projects;
