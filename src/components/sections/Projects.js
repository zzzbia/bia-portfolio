import React from "react";
import Project from "../Project";
import { SimpleGrid } from "@chakra-ui/react";

const Projects = () => {
	const myProjects = [
		{
			title: "Toronto event finder",
			github: "https://benbasic.github.io/Toronto-Event-Finder",
			live: "https://benbasic.github.io/Toronto-Event-Finder",
			image: "images/Torontoevent.png",
			description:
				"A Toronto event finder app that allows users to search for events by category and location.",
			skills: "HTML, JS, Express",
			isDeployed: true,
		},
		{
			title: "Toronto event finder",
			github: "https://benbasic.github.io/Toronto-Event-Finder",
			live: "https://benbasic.github.io/Toronto-Event-Finder",
			image: "images/Torontoevent.png",
			description:
				"A Toronto event finder app that allows users to search for events by category and location.",

			skills: "HTML, JS, Express",
			isDeployed: true,
		},
		{
			title: "Toronto event finder",
			github: "https://benbasic.github.io/Toronto-Event-Finder",
			live: "https://benbasic.github.io/Toronto-Event-Finder",
			image: "images/Torontoevent.png",
			description:
				"A Toronto event finder app that allows users to search for events by category and location.",

			skills: "HTML, JS, Express",

			isDeployed: false,
		},
		{
			title: "Toronto event finder",
			github: "https://benbasic.github.io/Toronto-Event-Finder",
			live: "",
			image: "images/Torontoevent.png",
			description:
				"A Toronto event finder app that allows users to search for events by category and location.",

			skills: "HTML, JS, Express",
			isDeployed: false,
		},
	];

	return (
		<section className="work-section" id="work">
			<SimpleGrid columns={2} spacing={8}>
				{myProjects.map((project) => {
					return (
						<Project
							title={project.title}
							github={project.github}
							live={project.live}
							image={project.image}
							skills={project.skills}
							isDeployed={project.isDeployed}
							description={project.description}
						/>
					);
				})}
			</SimpleGrid>
		</section>
	);
};

export default Projects;
