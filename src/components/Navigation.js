import React from "react";
import { useLocation } from "react-router-dom";

const Navigation = () => {
	const location = useLocation();

	console.log(location.pathname);

	const navItems = [
		{
			name: "About",
			path: "/",
		},
		{
			name: "Skills",
			path: "/skills",
		},
		{
			name: "Projects",
			path: "/projects",
		},
		{
			name: "Contact",
			path: "/contact",
		},
		{
			name: "Resume",
			path: "/resume",
		},
	];

	return (
		<nav>
			{navItems.map((item) => (
				<a
					className={
						location.pathname === item.path ? "underline text-primary" : ""
					}
					key={item.name}
					href={item.path}
				>
					{item.name}
				</a>
			))}
		</nav>
	);
};

export default Navigation;
