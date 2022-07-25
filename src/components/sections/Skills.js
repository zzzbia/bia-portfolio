import React from "react";

const Skills = () => {
	return (
		<section className="skills-section" id="skills">
			<div className="skills">
				<h1 className="skills-h1">HTML, CSS, JS </h1>
				<img
					src="/images/thinkinghard.png"
					alt="girl with her thinking hand on chin"
				/>
			</div>
			<div className="skills">
				<h1 className="skills-h1">Express, APIs, Socket </h1>
				<img
					src="/images/fingerscrossed.png"
					alt="girl grinning fingers crossed"
				/>
			</div>
			<div className="skills">
				<h1 className="skills-h1">Mongo, MySQL</h1>
				<img
					src="/images/browsinglaptop.png"
					alt="girl working on her Mac laptop"
				/>
			</div>
		</section>
	);
};

export default Skills;
