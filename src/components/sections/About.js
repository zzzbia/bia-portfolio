import React from "react";

const About = () => {
	return (
		<section className="about-section" id="about">
			<figure>
				<img
					src="/images/lovetech.png"
					alt=" girl makes heartshaped hands with laptop"
					className="about-image"
				/>
			</figure>

			<div className="about-content">
				<h1>About Me</h1>
				<h2>Thirst for Knowledge, Willingness to Learn, Ready to Improve</h2>
				<p>
					{" "}
					I am an avid learner! I seek to constantly improve while I go forward
					in both front-end and back-end development. I am confident in my
					ability to keep learning and building high-quality websites and web
					applications.
				</p>
				<p>
					{" "}
					I am always keeping up with the latest technologies and trends since
					technology truely "sparks" my interest.
				</p>
				<p>
					{" "}
					I am a team player and I am always willing to help out wherever
					needed. I am also a great communicator and I am always happy to share
					my knowledge with others.
				</p>
			</div>
		</section>
	);
};

export default About;
