import React from "react";
import Navigation from "./Navigation";

function Header() {
	return (
		<div className="bg-indigo-100 py-2 md:py-4">
			<div class="container px-4 mx-auto md:flex md:items-center justify-between">
				<h1 className="text-3xl font-bold "> zzzBia's Portfolio</h1>
				<Navigation />
			</div>
		</div>
	);
}
export default Header;
