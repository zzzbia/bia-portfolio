import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const headings = {
	about: {
		heading: "Hi, I'm a fullstack developer",
		subHeading: "I’m a Full Stack Web Developer from Toronto, Canada",
	},
	skills: {
		heading: "Learn more about my development skills",
		subHeading: "",
	},
	projects: {
		heading: "My projects",
		subHeading: "Check out some of my awesome projects below",
	},
	contact: {
		heading: "Let's get in touch",
		subHeading: "Feel free to contact me below",
	},
	resume: {
		heading: "Download my resume",
		subHeading: "",
	},
};

const HeroSection = () => {
	const location = useLocation();

	const [heading, setHeading] = useState(headings.about.heading);
	const [subHeading, setSubHeading] = useState(headings.about.subHeading);
	const [showContactBtn, setShowContactBtn] = useState(true);
	const [showDownloadResumeBtn, setShowDownloadResumeBtn] = useState(false);

	useEffect(() => {
		if (location.pathname === "/") {
			setHeading(headings.about.heading);
			setSubHeading(headings.about.subHeading);
		}

		if (location.pathname === "/skills") {
			setHeading(headings.skills.heading);
			setSubHeading(headings.skills.subHeading);
		}

		if (location.pathname === "/contact") {
			setHeading(headings.contact.heading);
			setSubHeading(headings.contact.subHeading);
			setShowContactBtn(false);
		}

		if (location.pathname === "/projects") {
			setHeading(headings.projects.heading);
			setSubHeading(headings.projects.subHeading);
		}
		if (location.pathname === "/resume") {
			setHeading(headings.resume.heading);
			setSubHeading(headings.resume.subHeading);
			setShowDownloadResumeBtn(true);
			setShowContactBtn(false);
		}
	}, [location.pathname]);

	return (
		<section id="hero" className="hero-section">
			<div className="hero-content">
				<h1>{heading}</h1>
				<h2>{subHeading}</h2>
				{showContactBtn ? <a href="/contact">Contact Me</a> : ""}
				{showDownloadResumeBtn ? (
					<a href="/resume.pdf" download>
						Download
					</a>
				) : (
					""
				)}
			</div>
			<img
				src="/images/celebrate.png"
				alt="girl celebrating with confetti"
				className="hero-image"
			/>
		</section>
	);
};

export default HeroSection;
