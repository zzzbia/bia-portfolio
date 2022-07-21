import React from "react";

function Navigation() {
	return (
		<ul class="flex-row flex ">
			<li
				class="button border py-2 px-4 rounded-sm
                 transition-all duration-300 ease-in-out 
                 transform hover:-translate-y-1 hover:bg-white hover:text-black"
			>
				<a href="#bla"> About Me</a>
			</li>
			<li
				class="button border py-2 px-4 rounded-sm
                 transition-all duration-300 ease-in-out 
                 transform hover:-translate-y-1 hover:bg-white hover:text-black"
			>
				<a href="#bla"> Portfolio</a>
			</li>
			<li
				class="button border py-2 px-4 rounded-sm
                 transition-all duration-300 ease-in-out 
                 transform hover:-translate-y-1 hover:bg-white hover:text-black"
			>
				<a href="#bla"> Contact</a>
			</li>
		</ul>
	);
}

export default Navigation;
