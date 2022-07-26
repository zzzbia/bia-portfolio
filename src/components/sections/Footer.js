import React from "react";

const Footer = () => {
	return (
		<footer className="contact">
			<section id="contact" className="contact-content">
				<h1>Contact Me</h1>
				<a href="mailto:rabia.saeed.1995@gmail.com">
					{" "}
					email: rabia.saeed.1995@gmail.com{" "}
				</a>
				<a href="https://www.github.com/zzzbia"> github: github.com/zzzbia</a>
			</section>
			<figure className="footer-image">
				<img
					src="/images/callmebeepme.png"
					alt="girl making calling hand gesture"
				/>
			</figure>
		</footer>
	);
};

export default Footer;
