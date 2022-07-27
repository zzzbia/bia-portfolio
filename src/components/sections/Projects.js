import React from "react";
import Project from "../Project";
import { SimpleGrid } from "@chakra-ui/react";

const Projects = () => {
	const myProjects = [
		{
			title: "Toronto event finder",
			github: "https://benbasic.github.io/Toronto-Event-Finder",
			live: "https://benbasic.github.io/Toronto-Event-Finder",
			image: "images/toronto-event.png",
			description:
				"A Toronto event finder app that allows users to search for events by category and location.",
			skills: "HTML, CSS, Tailwind, JS, Mapbox API, Ticketmaster API",
			isDeployed: true,
		},
		{
			title: "Cool Chatbox",
			github: "https://github.com/zzzbia/Cool-Chatbox",
			live: "https://coolchatbox.herokuapp.com/",
			image: "images/coolchat.png",
			description:
				"A chatbox app that allows a one on one chat with another user and share their thoughts.",

			skills: "HTML, CSS, Tailwind, JS, Express, Node, Socket, SQL, Sequelize",
			isDeployed: true,
		},
		{
			title: "Weather Board",
			github: "https://github.com/zzzbia/weatherboard",
			live: "https://zzzbia.github.io/weatherboard/",
			image: "images/weatherdash.png",
			description:
				"A weather board app that allows users to search for weather by city.",

			skills: "HTML, JS, CSS, Bootstrap, JQuery, Moment.js, OpenWeatherMap API",

			isDeployed: true,
		},
		{
			title: "Random Password Generator",
			github: "https://github.com/zzzbia/random-password-generator",
			live: "https://zzzbia.github.io/random-password-generator/",
			image: "images/passgen.png",
			description:
				"A random password generator app that allows users to generate a random password.",

			skills: "HTML, JS, CSS",
			isDeployed: true,
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
