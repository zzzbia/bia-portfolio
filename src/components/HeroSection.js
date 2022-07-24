import React from "react";

const HeroSection = () => {
	return (
		<section id="hero" class="hero-section">
			<div class="hero-content">
				<h1> Hi, I’m a fullstack developer</h1>
				<h2> I’m a Full Stack Web Developer from Toronto, Canada</h2>
				<a href="#contact">Contact Me</a>
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
